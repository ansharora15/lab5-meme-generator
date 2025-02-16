Lecture 10 - Regular Expressions Activity

Name: Ansh Arora
Course: CSCI 3172
GitLab URL: https://git.cs.dal.ca/ansha/csci-3172

Regular Expressions Used:

First Name (Allows letters and optional middle name with space):
^[a-zA-Z]+(?: [a-zA-Z]+)*$

Last Name (Allows letters, apostrophes, and hyphens):
^[a-zA-Z]+(?:[-'][a-zA-Z]+)*$

Email (Valid email format with domain between 2 to 6 characters):
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$

Password (At least 12 characters, one uppercase, one lowercase, one number, one special character):
^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{12,}$

Test Results:

Passed Cases:

First Name: John, Mary Jane

Last Name: O'Brien, Smith-Jones

Email: user@example.com, someone@mail.co.uk

Password: P@ssw0rdSecure12

Failed Cases:

First Name: John123 (Numbers not allowed), Mary@Jane (Special characters not allowed)

Last Name: O''Brien (Double apostrophes not allowed), Smith--Jones (Double hyphens not allowed)

Email: user@com (Invalid domain), user@@example.com (Multiple @ symbols not allowed)

Password: password (Missing uppercase, number, special character), Pass1234 (Less than 12 characters)

Reflection:

I used the regexr tool to test my regular expressions and checked them in my browser form. It helped find mistakes and improve the expressions. Some challenges were allowing apostrophes and hyphens in last names correctly and making sure the password rule worked well. Testing in a real form showed extra issues that were not obvious in the regex tool. Overall, I learned how to validate user input properly.