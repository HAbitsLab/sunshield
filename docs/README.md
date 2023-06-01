# Sunshield

A flutter app designed for self-tracking UV protection behaviors.

## How it works
The app consists of a login page, a home page, and a two-page survey that is accessed from the home page. Users complete the survey each time they go outside.

### Survey page 1: Clothing
The first page of the survey prompts users to report their clothing by configuring a character graphic to represent clothing states, including: hat/no hat, short sleeves/long sleeves/no sleeves, shorts/pants/no pants, shoes/bare feet/sandals

Clothing states persist. The default state is: no hat + no sleeves + no pants + bare feet. Each time the user submits an entry, the default state is updated. This is a time saving feature based on the assumption that, for any two consecutive instances of going outside, a person is more likely to be wearing similar clothing than dissimilar clothing.

### Survey page 2: Sunscreen
The second page of the survey prompts users to report their sunscreen coverage by configuring a character graphic to represent sunscreen coverage.

Sunscreen states persist. The default state is no sunscreen whatsoever. Each time the user submits an entry, the deault state is updated. This is a time saving feature based on the assumption that people are generally consistent in their use or non-use of sunscreen.

## Data Usage
The app writes the following to __local storage__:
- User ID
- Most recent clothing state (4 values)
- Most recent sunscreen state (4 values)

The app writes the following to __remote storage__:
- User ID
- All user-submitted entries 
  - Clothing state (4 values)
  - Suncreen state (4 values)
  - Time and date of submission
  - Duration to complete entry
