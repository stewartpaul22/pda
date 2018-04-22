# Testing task 1:

## Carry out static testing on the code below.

### Read through code below and comment on any errors you can spot.

#### Don't correct the errors!


```ruby
class CardGame

  def initialize(suit, value)
    @suit = suit
    # there should not be a semi-colon at the end of the line
    @value = value;
  end
  # by using '=', the condition in the if statement is assigning 1 to card.value; using '==' would check if the expression is true or false
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end
  # dif should be def
  # there should be a comma to separate the parameters i.e. (card1, card2)
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end
# this method appears to be declared outside of the class
def self.cards_total(cards)
  # total needs to be initialised with a value or nil e.g. total = 0 or total = nil
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end

```
