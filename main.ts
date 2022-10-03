game.splash("Pizza Order")
let diameter_inch_of_pizza = game.askForNumber("What size of pizza do you want?", 2)
let material = 0.5
let rent_on_shop_and_labour_cost = 1.75
let material_price = material * diameter_inch_of_pizza
game.splash("" + convertToText(material_price))
let final_price = material_price + rent_on_shop_and_labour_cost
game.splash(convertToText(final_price))
game.splash("Done")
