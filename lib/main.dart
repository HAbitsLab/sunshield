import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'dart:async';
import 'package:firebase_core/firebase_core.dart';
import 'package:intl/intl.dart';
import 'firebase_options.dart';
import 'package:shared_preferences/shared_preferences.dart';

const primaryColor = Color(0xFFF3D184);

FirebaseFirestore db = FirebaseFirestore.instance;

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController _userIdController = TextEditingController();
  String? _userIdError;

  void _validateUserId(String value) {
    final userIdRegExp = RegExp(r'^.{2,30}$');
    if (!userIdRegExp.hasMatch(value)) {
      setState(() {
        _userIdError = 'User ID must be 2-30 characters long';
      });
    } else {
      setState(() {
        _userIdError = null;
      });
    }
  }

  void _register() {
    if (_userIdError == null) {
      // Proceed with registration logic
      // final String userId = _userIdController.text;
      _saveUserId();
      // ...
    }
  }

  void _saveUserId() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    final String userId = _userIdController.text;
    await prefs.setString('userId', userId);
    await prefs.setBool('loggedIn', true); // Set the login flag to true
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => HomePage(userId: userId)),
    );
  }

  @override
  void dispose() {
    _userIdController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Login'), backgroundColor: primaryColor),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Thank you for participating in the MUSE app Demo\n',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 50.0),
            Text(
              '"Sunshield"',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            Image.asset(
              'assets/images/ic_launcher.png',
              width: 200,
              height: 200,
            ),
            SizedBox(height: 200.0),
            Text(
              'Enter your first name (or an alias) as your User ID  —  don\'t use numbers',
              style: TextStyle(
                fontSize: 16,
              ),
            ),
            SizedBox(height: 40.0),
            TextFormField(
              controller: _userIdController,
              decoration: InputDecoration(
                labelText: '   User ID',
              ),
              onChanged: _validateUserId,
            ),
            if (_userIdError != null)
              Text(
                _userIdError!,
                style: TextStyle(color: Colors.red),
              ),
            SizedBox(height: 16.0),
            ElevatedButton(
              onPressed: _register,
              style: ElevatedButton.styleFrom(
                backgroundColor: primaryColor,
              ),
              child: Text('Login'),
            ),
          ], // children
        ),
      ),
    );
  } // build
} // _LoginPageState

void main() {
  runApp(SurveyApp());
}

Future<void> sendEntryToRemoteDatabase(Entry entry) async {
  try {
    CollectionReference entriesCollection =
        FirebaseFirestore.instance.collection('entries');
    await entriesCollection.add({
      'userId': entry.userId,
      'date': entry.formattedDate,
      'carouselIndex': entry.carouselIndex,
      'carousel2Index': entry.carousel2Index,
      'carousel3Index': entry.carousel3Index,
      'carousel4Index': entry.carousel4Index,
      'carousel5Index': entry.carousel5Index,
      'carousel6Index': entry.carousel6Index,
      'carousel7Index': entry.carousel7Index,
      'carousel8Index': entry.carousel8Index,
      'duration': entry.formattedDuration,
    }).then((DocumentReference doc) => print('ID: ${doc.id}'));
    print('Entry sent to remote database');
  } catch (error) {
    print('Error sending entry to remote database: $error');
  }
}

class SurveyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MUSE: Demo',
      theme: ThemeData(
        primaryColor: primaryColor,
      ),
      home: FutureBuilder<SharedPreferences>(
        future: SharedPreferences.getInstance(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            final SharedPreferences prefs = snapshot.data!;
            final bool loggedIn = prefs.getBool('loggedIn') ?? false;

            if (loggedIn) {
              final String? userId = prefs.getString('userId');
              if (userId != null) {
                return HomePage(userId: userId);
              }
            }
          }
          return LoginPage();
        },
      ),
    );
  } // build
} // SurveyApp

class HomePage extends StatefulWidget {
  final String userId;
  HomePage({required this.userId});
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Entry> entries = [];
  DateTime? startTime;
  late SharedPreferences prefs;

  // _HomePageState(this.prefs);

  void _logout(BuildContext context) async {
    await prefs.remove('userId'); // Remove user ID from SharedPreferences

    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => LoginPage()),
    );
  }

  void addEntry(Entry entry) async {
    setState(() {
      entries.add(entry);
    });
    await Firebase.initializeApp(
      options: DefaultFirebaseOptions.currentPlatform,
    );
    try {
      await sendEntryToRemoteDatabase(entry);
    } catch (error) {
      print('Error adding entry: $error');
    }
  }

  Future<void> initSharedPreferences() async {
    prefs = await SharedPreferences.getInstance();
  }

  void nav() {
    setState(() {
      startTime = DateTime.now();
    });
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => SurveyPage(
          addEntry: addEntry,
          userId: widget.userId,
          startTime: startTime!,
        ),
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    initSharedPreferences();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('MUSE: Demo'),
        backgroundColor: primaryColor,
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () => _logout(context), // Call the logout function
          ),
        ],
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(height: 16),
          Text(
            '  Welcome to the MUSE: Demo app',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          Text(
            '  This app is for self-logging UV protection behaviours.\n'
            '  The survey contains widgets for reporting clothing and sunscreen use.\n\n',
            style: TextStyle(fontSize: 16),
          ),
          Text(
            '  How to use:',
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
          Text(
              '  Tap the + button and complete the survey every time you go outside.'),
          SizedBox(height: 48),
          Text(
            '  Previous entries:',
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 16),
          Expanded(
            child: ListView.builder(
              itemCount: entries.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(entries[index].formattedDate),
                  subtitle: Text('CLOTHING:  '
                      'head = ${entries[index].carouselIndex}  '
                      'torso = ${entries[index].carousel2Index}  '
                      'legs = ${entries[index].carousel3Index}  '
                      'feet = ${entries[index].carousel4Index}\n'
                      'SUNSCREEN:  '
                      'head = ${entries[index].carousel5Index}  '
                      'torso = ${entries[index].carousel6Index}  '
                      'legs = ${entries[index].carousel7Index}  '
                      'feet = ${entries[index].carousel8Index}'),
                  trailing:
                      Text('duration: ${entries[index].formattedDuration}'),
                );
              }, // itemBuilder
            ),
          ),
        ], // children
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          nav();
        },
        backgroundColor: primaryColor,
        child: Icon(Icons.add),
      ),
    );
  } // build
} // _HomePageState

class Entry {
  final String userId;
  final DateTime date;
  final int carouselIndex;
  final int carousel2Index;
  final int carousel3Index;
  final int carousel4Index;
  final int carousel5Index;
  final int carousel6Index;
  final int carousel7Index;
  final int carousel8Index;
  late String formattedDate;
  late Duration duration;
  late String formattedDuration;

  Entry(
      {required this.userId,
      required this.date,
      required this.carouselIndex,
      required this.carousel2Index,
      required this.carousel3Index,
      required this.carousel4Index,
      required this.carousel5Index,
      required this.carousel6Index,
      required this.carousel7Index,
      required this.carousel8Index,
      required this.duration}) {
    formattedDate = DateFormat('yyyy-MM-dd HH:mm:ss').format(date);
    formattedDuration = formatDuration(duration);
  }
  String formatDuration(Duration duration) {
    String minutes = (duration.inMinutes % 60).toString().padLeft(2, '0');
    String seconds = (duration.inSeconds % 60).toString().padLeft(2, '0');
    return '$minutes:$seconds';
  }
}

class SurveyPage extends StatefulWidget {
  final String userId;
  final DateTime startTime;

  final Function(Entry) addEntry;

  SurveyPage(
      {required this.addEntry, required this.userId, required this.startTime});

  @override
  _SurveyPageState createState() => _SurveyPageState();
}

class _SurveyPageState extends State<SurveyPage> {
  int carousel1Index = 0;
  int carousel2Index = 0;
  int carousel3Index = 0;
  int carousel4Index = 0;
  late SharedPreferences prefs;

  @override
  void initState() {
    super.initState();
    initSharedPreferences().then((_) {
      loadCarouselIndices();
    });
  }

  Future<void> initSharedPreferences() async {
    prefs = await SharedPreferences.getInstance();
  }

  void loadCarouselIndices() {
    setState(() {
      carousel1Index = prefs.getInt('${widget.userId}_carousel1Index') ?? 0;
      carousel2Index = prefs.getInt('${widget.userId}_carousel2Index') ?? 0;
      carousel3Index = prefs.getInt('${widget.userId}_carousel3Index') ?? 0;
      carousel4Index = prefs.getInt('${widget.userId}_carousel4Index') ?? 0;
    });
  }

  void saveCarouselIndices() async {
    await prefs.setInt('${widget.userId}_carousel1Index', carousel1Index);
    await prefs.setInt('${widget.userId}_carousel2Index', carousel2Index);
    await prefs.setInt('${widget.userId}_carousel3Index', carousel3Index);
    await prefs.setInt('${widget.userId}_carousel4Index', carousel4Index);
  }

  void _navigateToNextPage() {
    saveCarouselIndices();
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => SurveyPage2(
          userId: widget.userId,
          startTime: widget.startTime,
          endTime: DateTime.now(),
          addEntry: widget.addEntry,
          carouselIndices: [
            carousel1Index,
            carousel2Index,
            carousel3Index,
            carousel4Index,
          ], // carouselIndices
        ),
      ),
    ); // Navigator.push
  } // _navigateToNextPage

  void nextImage(int carouselIndex) {
    setState(() {
      if (carouselIndex == 1) {
        carousel1Index = (carousel1Index + 1) % 3;
      } else if (carouselIndex == 2) {
        carousel2Index = (carousel2Index + 1) % 3;
      } else if (carouselIndex == 3) {
        carousel3Index = (carousel3Index + 1) % 3;
      } else if (carouselIndex == 4) {
        carousel4Index = (carousel4Index + 1) % 3;
      }
    });
  }

  void previousImage(int carouselIndex) {
    setState(() {
      if (carouselIndex == 1) {
        carousel1Index = (carousel1Index - 1) % 3;
      } else if (carouselIndex == 2) {
        carousel2Index = (carousel2Index - 1) % 3;
      } else if (carouselIndex == 3) {
        carousel3Index = (carousel3Index - 1) % 3;
      } else if (carouselIndex == 4) {
        carousel4Index = (carousel4Index - 1) % 3;
      }
    });
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Clothing'),
        backgroundColor: primaryColor,
      ),
      body: Padding(
        padding: EdgeInsets.all(0.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            SizedBox(height: 20.0),
            Text(
              'Select the clothing that is closest to your own\n',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20.0),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 0.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () => previousImage(1),
                    icon: Icon(Icons.arrow_left),
                  ),
                  Center(
                    child: Container(
                      width: 175,
                      height: 87.5,
                      child: IndexedStack(
                        index: carousel1Index,
                        children: [
                          Image.asset('Slide1.png'),
                          Image.asset('Slide2.png'),
                          Image.asset('Slide3.png'),
                        ], // children
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => nextImage(1),
                    icon: Icon(Icons.arrow_right),
                  ),
                ], // children
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 0.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () => previousImage(2),
                    icon: Icon(Icons.arrow_left),
                  ),
                  Center(
                    child: Container(
                      width: 175,
                      height: 115.5,
                      child: IndexedStack(
                        index: carousel2Index,
                        children: [
                          Image.asset('Slide4.png'),
                          Image.asset('Slide5.png'),
                          Image.asset('Slide6.png'),
                        ],
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => nextImage(2),
                    icon: Icon(Icons.arrow_right),
                  ),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 0.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () => previousImage(3),
                    icon: Icon(Icons.arrow_left),
                  ),
                  Center(
                    child: Container(
                      width: 175,
                      height: 175,
                      child: IndexedStack(
                        index: carousel3Index,
                        children: [
                          Image.asset('Slide7.png'),
                          Image.asset('Slide8.png'),
                          Image.asset('Slide9.png'),
                        ], // children
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => nextImage(3),
                    icon: Icon(Icons.arrow_right),
                  ),
                ], // children
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 0.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () => previousImage(4),
                    icon: Icon(Icons.arrow_left),
                  ),
                  Center(
                    child: Container(
                      width: 175,
                      height: 87.5,
                      child: IndexedStack(
                        index: carousel4Index,
                        children: [
                          Image.asset('Slide10.png'),
                          Image.asset('Slide11.png'),
                          Image.asset('Slide12.png'),
                        ], // children
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => nextImage(4),
                    icon: Icon(Icons.arrow_right),
                  ),
                ], // children
              ),
            ),
            SizedBox(height: 24.0),
            Text(
              'Tap the left and right arrows to choose clothes',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 32.0),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 300.0),
              child: ElevatedButton(
                onPressed: () {
                  _navigateToNextPage();
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: primaryColor,
                  foregroundColor: Colors.white,
                  fixedSize: Size(50, 50),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(32.0),
                  ),
                ),
                child: Text('Submit',
                    style: TextStyle(fontWeight: FontWeight.bold)),
              ),
            ),
          ], // children
        ),
      ),
    );
  } // build
} // _SurveyPage2State

class SurveyPage2 extends StatefulWidget {
  final String userId;
  final DateTime startTime;
  final List<int> carouselIndices;
  final Function(Entry) addEntry;
  final DateTime endTime;

  SurveyPage2({
    required this.userId,
    required this.carouselIndices,
    required this.addEntry,
    required this.startTime,
    required this.endTime,
  });

  @override
  _SurveyPage2State createState() => _SurveyPage2State();
}

class _SurveyPage2State extends State<SurveyPage2> {
  List<Entry> entries = [];
  int carousel1Index = 0;
  int carousel2Index = 0;
  int carousel3Index = 0;
  int carousel4Index = 0;
  int carousel5Index = 0;
  int carousel6Index = 0;
  int carousel7Index = 0;
  int carousel8Index = 0;
  late SharedPreferences prefs;
  late DateTime startTime;
  Duration duration = Duration();

  @override
  void initState() {
    super.initState();
    initSharedPreferences().then((_) {
      loadCarouselIndices();
    });
  }

  Future<void> initSharedPreferences() async {
    prefs = await SharedPreferences.getInstance();
  }

  void loadCarouselIndices() {
    setState(() {
      carousel1Index = prefs.getInt('${widget.userId}_carousel1Index') ?? 0;
      carousel2Index = prefs.getInt('${widget.userId}_carousel2Index') ?? 0;
      carousel3Index = prefs.getInt('${widget.userId}_carousel3Index') ?? 0;
      carousel4Index = prefs.getInt('${widget.userId}_carousel4Index') ?? 0;
      carousel5Index = prefs.getInt('${widget.userId}_carousel5Index') ?? 0;
      carousel6Index = prefs.getInt('${widget.userId}_carousel6Index') ?? 0;
      carousel7Index = prefs.getInt('${widget.userId}_carousel7Index') ?? 0;
      carousel8Index = prefs.getInt('${widget.userId}_carousel8Index') ?? 0;
    });
  }

  void saveCarouselIndices() async {
    await prefs.setInt('${widget.userId}_carousel5Index', carousel5Index);
    await prefs.setInt('${widget.userId}_carousel6Index', carousel6Index);
    await prefs.setInt('${widget.userId}_carousel7Index', carousel7Index);
    await prefs.setInt('${widget.userId}_carousel8Index', carousel8Index);
  }

  void _submitEntry() {
    saveCarouselIndices();
    Navigator.pop(context);
  }

  void nextImage(int carouselIndex) {
    setState(() {
      if (carouselIndex == 1) {
        carousel5Index = (carousel5Index + 1) % 3;
      } else if (carouselIndex == 2) {
        carousel6Index = (carousel6Index + 1) % 6;
      } else if (carouselIndex == 3) {
        carousel7Index = (carousel7Index + 1) % 5;
      } else if (carouselIndex == 4) {
        carousel8Index = (carousel8Index + 1) % 2;
      }
    });
  }

  void previousImage(int carouselIndex) {
    setState(() {
      if (carouselIndex == 1) {
        carousel5Index = (carousel5Index - 1) % 3;
      } else if (carouselIndex == 2) {
        carousel6Index = (carousel6Index - 1) % 6;
      } else if (carouselIndex == 3) {
        carousel7Index = (carousel7Index - 1) % 5;
      } else if (carouselIndex == 4) {
        carousel8Index = (carousel8Index - 1) % 2;
      }
    });
  }

  @override
  void dispose() {
    // stopTimer();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Sunscreen'),
        backgroundColor: primaryColor,
      ),
      body: Padding(
        padding: EdgeInsets.all(0.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            SizedBox(height: 20.0),
            Text(
              'Select the sunscreen coverage closest to your own\n',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 20.0,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 20.0),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 0.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () => previousImage(1),
                    icon: Icon(Icons.arrow_left),
                  ),
                  Center(
                    child: Container(
                      width: 175,
                      height: 87.5,
                      child: IndexedStack(
                        index: carousel5Index,
                        children: [
                          Image.asset('Slide13.png'),
                          Image.asset('Slide14.png'),
                          Image.asset('Slide15.png'),
                        ], // children
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => nextImage(1),
                    icon: Icon(Icons.arrow_right),
                  ),
                ], // children
              ),
            ),
            // SizedBox(height: 0.0),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 0.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () => previousImage(2),
                    icon: Icon(Icons.arrow_left),
                  ),
                  Center(
                    child: Container(
                      width: 175,
                      height: 115.5,
                      child: IndexedStack(
                        index: carousel6Index,
                        children: [
                          Image.asset('Slide16.png'),
                          Image.asset('Slide17.png'),
                          Image.asset('Slide18.png'),
                          Image.asset('Slide19.png'),
                          Image.asset('Slide20.png'),
                          Image.asset('Slide21.png'),
                        ],
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => nextImage(2),
                    icon: Icon(Icons.arrow_right),
                  ),
                ], // children
              ),
            ),
            // SizedBox(height: 16.0),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 0.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () => previousImage(3),
                    icon: Icon(Icons.arrow_left),
                  ),
                  Center(
                    child: Container(
                      width: 175,
                      height: 175,
                      child: IndexedStack(
                        index: carousel7Index,
                        children: [
                          Image.asset('Slide22.png'),
                          Image.asset('Slide23.png'),
                          Image.asset('Slide24.png'),
                          Image.asset('Slide25.png'),
                          Image.asset('Slide26.png'),
                        ], // children
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => nextImage(3),
                    icon: Icon(Icons.arrow_right),
                  ),
                ], // children
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 0.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () => previousImage(4),
                    icon: Icon(Icons.arrow_left),
                  ),
                  Center(
                    child: Container(
                      width: 175,
                      height: 87.5,
                      child: IndexedStack(
                        index: carousel8Index,
                        children: [
                          Image.asset('Slide27.png'),
                          Image.asset('Slide28.png'),
                        ], // children
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => nextImage(4),
                    icon: Icon(Icons.arrow_right),
                  ),
                ], // children
              ),
            ),
            SizedBox(height: 24.0),
            Text('Tap the left and right arrows to choose sunscreen coverage',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 16.0,
                )),
            SizedBox(height: 32.0),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 300.0),
              child: ElevatedButton(
                onPressed: () {
                  DateTime now = DateTime.now();
                  final Duration duration =
                      DateTime.now().difference(widget.startTime);
                  Entry entry = Entry(
                    userId: widget.userId,
                    date: now,
                    carouselIndex: carousel1Index,
                    carousel2Index: carousel2Index,
                    carousel3Index: carousel3Index,
                    carousel4Index: carousel4Index,
                    carousel5Index: carousel5Index,
                    carousel6Index: carousel6Index,
                    carousel7Index: carousel7Index,
                    carousel8Index: carousel8Index,
                    duration: duration,
                  );
                  _submitEntry();
                  widget.addEntry(entry);
                  Navigator.pop(context);
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: primaryColor,
                  foregroundColor: Colors.white,
                  fixedSize: Size(50, 50),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(32.0)),
                ),
                child: Text('Submit',
                    style: TextStyle(fontWeight: FontWeight.bold)),
              ),
            ),
          ], // children
        ),
      ),
    );
  } // build
} // class