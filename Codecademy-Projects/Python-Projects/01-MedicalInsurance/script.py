# create the initial variables below
age = 28
sex = 0
bmi = 26.2
num_of_children = 3
smoker = 0

# Add insurance estimate formula below
insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500
print('This person\'s insurance cost is ' + str(insurance_cost) + ' dollars.')

# Age Factor
age += 4
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500
change_in_insurance_cost = new_insurance_cost - insurance_cost
print('The change in cost of insurance after increasing the age by 4 years is ' + str(change_in_insurance_cost) + ' dollars.')

# BMI Factor
age -= 4
bmi += 3.1
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500
change_in_insurance_cost = new_insurance_cost - insurance_cost
print('The change in cost of insurance after increasing the BMI by 3.1 is ' + str(change_in_insurance_cost) + ' dollars.')

# Male vs. Female Factor
bmi -= 3.1
sex = 1
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500
change_in_insurance_cost = new_insurance_cost - insurance_cost
print('The change in cost of insurance for being male instead of female is ' + str(change_in_insurance_cost) + ' dollars.')

# Extra Practice
sex = 0
num_of_children = 0
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500
change_in_insurance_cost = new_insurance_cost - insurance_cost
print('The change in cost of insurance for having no children is ' + str(change_in_insurance_cost) + ' dollars.')

num_of_children = 3
smoker = 1
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500
change_in_insurance_cost = new_insurance_cost - insurance_cost
print('The change in cost of insurance for being a smoker is ' + str(change_in_insurance_cost) + ' dollars.')