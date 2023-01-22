# PHP Tutorial

## 1. PHP Introduction
### 1.1 How the Web Works?
![How the Web Works](../assets/images/how-the-web-works.png "How the Web Works")

### 1.2 What is PHP?
  - PHP is originally derived from **Personal Home Page Tools**, now stands for **PHP: Hypertext Preprocessor**
  - PHP is a server-side language i.e PHP files/scripts are executed on the **server**
  - PHP is free to download and use
It is powerful enough to be at the core of the biggest blogging system on the web (WordPress)!. It is deep enough to run large social networks!. It is also easy enough to be a beginner's first server side language!

### 1.3 What Do I Need?
To start using PHP, you can:
  - To run PHP in your Computer, you will need to install a web server like Apache and a database like MySQL – and both are supported by XAMPP.

  OR

  - Find a web server with PHP and MySQL support
#### Installing XAMPP
XAMPP stands for 
  - X - Operating System (Linux, Windows, and Mac OS X) 
  - A -  Apache, 
  - M - MySQL(or MariaDB), 
  - P - PHP
  - Perl

It is a local server that can run smoothly on our personal computer, and is accepted in both Windows and Linux. It also helps you test websites and see if they work before actually publishing them to a web server.
  
Follow the steps below to install:
1. Download XAMPP from the official [XAMPP](http://www.apachefriends.org/de/download.html) website 
2. Deactivate any Antivirus software and  Firewall blocking
3. Once the software bundle has been downloaded, you can start the installation by double clicking on the file with the ending .exe.


#### Installing PHP
1. Download **Thread safe** 32/64 bit zip package PHP8 from https://windows.php.net/download#php-8.0
2. Extract the zip package and paste the extracted folder onto your 
3. Rename the folder to php8( or any name that you like)
4. One this folder and look for php.ini-development file
5. Make a copy of this file and rename copy version to php.ini
6. Open php.ini file with your preferred text editor and uncomment PHPIniDir “ext”
7. Save the file and close the editor.

Set PHP 8 to System's Path:

8. Open php8 folder and copy and folder path
9. Press Windows Key on your keyboard and type 'variable' and hit Enter
10. Click Environment Variables
11. Click Edit and Click NEW on the right
12. Paste the php8 folder path
13. Click OK, OK, OK
14. To test if PHP is now installed in your computer, search for the command prompt in Windows by using the search keyword  cmd. Open it then type `php --version` and click enter. You should see something similar to this:

#### Installing MySQL
1. XAMPP already comes with MySQL so no need.

### 1.4 Run you first PHP script
1. For XAMPP to serve php files, the files must be located in `C:\xampp\htdocs` directory
2. Create a new folder called "webcapz" in `C:\xampp\htdocs` directory
3. Open the folder in VSCode and create a new file called `index.php` in `C:\xampp\htdocs\webcapz`
4. Inside the file, paste the following:

```php
<?php
echo "Hello World";
?>
```

### 1.5 What is a PHP File?
  - PHP files have extension ".php"
  - PHP files can contain text, HTML, CSS, JavaScript, and PHP code
  - PHP code is executed on the server, and the result is returned to the browser as plain HTML

### 1.6 What Can PHP Do?
  - PHP can generate dynamic page content
  - PHP can create, open, read, write, delete, and close files on the server
  - PHP can collect form data
  - PHP can send and receive cookies
  - PHP can add, delete, modify data in your database
  - PHP can be used to control user-access
  - PHP can encrypt data
  - With PHP you are not limited to output HTML. You can output images or PDF files. You can also output any text, such as XHTML and XML.
  




## 2. PHP Overview
### 2.1 Basic PHP Syntax?
  - A PHP script starts with `<?php` and ends with `?>`.

  - Since  PHP files can contain text, HTML, CSS, JavaScript, and PHP code, a PHP script can be placed anywhere in the document.

  - Sometimes the closing `?>` is omitted if the rest of the code is php

  - **PHP statements must end with a semicolon (;).**

```php
<!DOCTYPE html>
<html>
<body>
<h1>My first PHP page</h1>
<p><?php
echo "Hello World!";
?></p>
</body>
</html>
```

### 2.2 Case Sensitivity
  - In PHP, keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are not case-sensitive.

  - In the example below, all three echo statements below are equal and legal:
  ```php
  <!DOCTYPE html>
  <html>
  <body>

  <?php
  ECHO "Hello World!<br>";
  echo "Hello World!<br>";
  EcHo "Hello World!<br>";
  ?>

  </body>
  </html>
  ```

  - But All variable names are case-sensitive!
  - Look at the example below; only the first statement will display the value of the `$color` variable! This is because `$color`, `$COLOR`, and `$coLOR` are treated as three different variables:
  ```php
  <!DOCTYPE html>
  <html>
  <body>

  <?php
  $color = "red";
  echo "My car is " . $color .  "<br>";
  echo "My house is " . $COLOR .  "<br>";
  echo "My boat is " . $coLOR .   "<br>";
  ?>

  </body>
  </html>
  ```

### 2.3 Comments in PHP
A comment in PHP code is a line that is not executed as a part of the program. 
Comments can be used to:
  - Let others understand your code
  - Remind yourself of what you did - Most programmers have experienced coming back to their own work a year or two later and having to re-figure out what they did. Comments can remind you of what you were thinking when you wrote the code
  - While debugging it is used to cancel out some lines of code from executing in order to find where an error is coming from
  - There are two types of comments: single line and multi line comment
  - In VSCode editor highlight the desired code and press `ctrl + c + k`

  **Single Line**
  ```php
  <!DOCTYPE html>
  <html>
  <body>

  <?php
  // This is a single-line comment

  # This is also a single-line  comment
  ?>

  </body>
  </html>
  ```
  **Multi Line**
  ```php
  <!DOCTYPE html>
  <html>
  <body>

  <?php
  /*
  This is a multiple-lines comment block
  that spans over multiple
  lines
  */
  ?>

  </body>
  </html>
  ```
### 2.3 Displaying or outputting values
PHP runs on the server and output html to the browser but whatever is enclosed in the `<?php ?>` tag does not appear on the browser except we display/output it. This includes:
  - `echo`: outputs values but has no return value
    ```php
    <?php
    echo "Hello World ---";

    echo ("Hello World 2");

    $username = "Ilodigwe Chinaza";

    echo "Hello and Welcome ".$username;

    echo "Hello and Welcome $username";

    ?>
    ```

  - `print`: outputs values and has a return value of 1 so it can be used in expressions. e.g
    ```php
    <?php
    print "Hello World -----";
    $our_variable = print("Hello World 2 ------");
    echo $our_variable;
    ?>
    ```
  - `printf(format,arg1,arg2,arg++)`:
  Outputs a formatted string. This function works "step-by-step". At the first % sign, arg1 is inserted, at the second % sign, arg2 is inserted, etc.

    ```php
    <?php
    $number = 9;
    $str = "Beijing";
    printf("There are %u million bicycles in %s.",$number,$str);
    ```
    related functions include
    `sprintf()`, `vprintf()`, `vsprintf()`, `fprintf()` and `vfprintf()`

  - `print_r`: Print the information about some **variables** in a more human-readable way:
    ```php
    <?php
    $b = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
    print_r($b);
    ?>
    ```

  - `var_dump`: Dumps information about different variables (i.e data type and value). but not as human readable as `print_r`
    ```php
    <?php
    $b = "Hello world!";
    $e = array(32, "Hello world!", 32.5, array("red", "green", "blue"));

    var_dump($e);

    echo "<br>";

    // Dump two variables
    var_dump($e, $b);
    echo "<br>";
    ?>
    ```
`print` and `echo` statements can be used with or without parentheses

## 3. PHP Variables
### 3.1 Creating (Declaring) Variables
Variables are like containers for storing data.

Unlike other programming languages, PHP has no command for declaring a variable. It is created the moment you first assign a value to it. 

A variable starts with the $ sign, followed by the name of the variable:
```php
<?php
$txt = "Hello world!";
$x = 5;
?>
```
**Rules for PHP variables**:

  - A variable starts with the $ sign, followed by the name of the variable
  - A variable name must start with a letter or the underscore character `_`
  - A variable name cannot start with a number
  - A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
  - Variable names are case-sensitive (`$age` and `$AGE` are two different variables)
```php
<?php
$username = "Ilodigwe Chinaza";
$num1 = 2;
$num2 = 8;
$sum = $num1 + $num2;
echo "Hello and Welcome ".$username;
echo "<br>";
echo "The sum of $num1 and $num2 is $sum";
?>
```

**PHP is a Loosely Typed Language:**

In the example above, notice that we did not have to tell PHP which data type the variable is.

PHP automatically associates a data type to the variable, depending on its value. Since the data types are not set in a strict sense, you can do things like adding a string to an integer without causing an error.

PHP also provides automatic data type conversion.

So, if you assign an integer value to a variable, the type of that variable will automatically be an integer. Then, if you assign a string to the same variable, the type will change to a string.

This automatic conversion can sometimes break your code.

In PHP 7, type declarations were added. This gives an option to specify the data type expected when declaring a function, and by enabling the strict requirement, it will throw a "Fatal Error" on a type mismatch.

You will learn more about strict and non-strict requirements, and data type declarations in the PHP Functions chapter.

### 3.2 Constants
Constants are like variables except that once they are defined they cannot be changed or undefined. Unlike variables, constants are automatically **global** across the entire script.

A valid constant name starts with a letter or underscore (no `$` sign before the constant name, **very important**).

To create a constant, use the `define()` function.

**Syntax**: `define(name, value)`

**Parameters**:
  - `name`: Specifies the name of the constant
  - `value`: Specifies the value of the constant

```php
<?php
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;
?>
```

### 3.3 Variable Scope
The scope of a variable is the part of the script where the variable can be referenced/used.
PHP has three different variable scopes:
  - local
  - global
  - static


#### Local Scope
A variable declared within a function has a LOCAL SCOPE and can only be accessed within that function:
```php
<?php
function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";
?>
```
#### Global Scope
A variable declared outside a function has a GLOBAL SCOPE and can only be accessed outside a function:

```php
<?php
$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";
?>
```
#### The `global` Keyword
The global keyword is used to access a global variable from within a function.

To do this, use the global keyword before the variables (inside the function):
```php
<?php
$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();
echo $y; // outputs 15
?>
```
PHP also stores all global variables in an array called `$GLOBALS[index]`. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.

The example above can be rewritten like this:
```php
<?php
$x = 5;
$y = 10;

function myTest() {
  $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}

myTest();
echo $y; // outputs 15
echo $GLOBALS['y']; // outputs 15
?>
```

#### The `static` Keyword:
Normally, when a function is completed/executed, all of its variables are deleted. However, sometimes we want a local variable NOT to be deleted. We need it for a further job.

To do this, use the static keyword when you first declare the variable:

**With the `static` keyword**
```php
<?php

function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();
myTest();
myTest();

?>
```
### 3.4 Global Variables - Superglobals
Some predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.

The PHP superglobal variables are:
  - $GLOBALS
  - $_SERVER
  - $_REQUEST
  - $_POST
  - $_GET
  - $_FILES
  - $_ENV
  - $_COOKIE
  - $_SESSION

#### `$GLOBALS`
$GLOBALS is a PHP super global variable which is used to access global variables from anywhere in the PHP script (also from within functions or methods).

PHP stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. Like in the previous example.
#### `$_SERVER`
This is a PHP super global **variable** which holds information about headers, paths, and script locations.

```php
<?php
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
echo $_SERVER['REQUEST_METHOD'];
?>
```
The full reference can be found [here](https://www.w3schools.com/php/php_superglobals_server.asp)

#### `$_REQUEST`
This is a PHP super global variable which is used to collect data after submitting an HTML form. Contains form data for both `method="get"` and `method="post"`
```php
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="username">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_REQUEST['username'];
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>

</body>
</html>
```

#### `$_POST`
A PHP super global variable which is used to collect form data after submitting an HTML form with `method="post"`. $_POST is also widely used to pass variables.
```php
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="username">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_POST['username'];
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>

</body>
</html>
```

#### `$_GET`
PHP $_GET is a PHP super global variable which is used to collect form data after submitting an HTML form with `method="get"`.

`$_GET` can also collect data sent in the URL.

Assume we have an HTML page that contains a hyperlink with parameters:

```php
<html>
<body>
  <a href="<?php echo $_SERVER['PHP_SELF']; ?>?subject=PHP&tutor=Ilodigwe_Chinaza">Test $GET</a>
    <?php
    if (isset($_GET['subject']) || isset($_GET['tutor'])) {
        echo "Study " . $_GET['subject'] . " at " . $_GET['tutor'];
    }
    ?>
</body>

</html>
```
When a user clicks on the link "Test $GET", the parameters "subject" and "web" are sent to "test_get.php", and you can then access their values in "test_get.php" with $_GET.

#### `$_FILES`
PHP $_FILES is a PHP super global variable which is used to collect form data for `<input type="file">` after submitting an HTML form with `method="post"` and `enctype="multipart/form-data`.

Assume we have an HTML page that contains a hyperlink with parameters:

```php
<html>
<body>
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
      Name: <input type="text" name="fname">
      Photo: <input type="file" name="photo" accept="[.jpg .png .jpeg]">
      <input type="submit">
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // collect value of input field
      $name = $_POST['fname'];
      $photo = $_FILES['photo'];
      if (empty($photo)) {
          echo "Photo is empty";
      } else {
          print_r($photo);
      }
  }
  ?>
</body>
</html>
```

#### `$_SESSION`
To access or change a session variable:
```php
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// to change a session variable, just overwrite it
$_SESSION["favcolor"] = "yellow";
print_r($_SESSION);
?>

</body>
</html>
```
#### `$_ENV`
To set or access an environment variable:
```php
<?php
  $_ENV['key'] = 'kjcd';
  echo $_ENV['key'];
?>
```


### 4. Data Types
Variables can store data of different types, and different data types can do different things.

PHP supports the following data types:
  - String
  - Integer
  - Float (floating point numbers - also called double)
  - Boolean
  - Array
  - Object
  - NULL
  - Resource

#### PHP String
A string can be any text inside quotes. You can use single `''` or double quotes `""`:
```php
<?php
$x = "Hello world!";
echo $x;
?>
```
#### PHP Integer
An integer data type is a non-decimal number between `-2,147,483,648` and `2,147,483,647`.

Rules for integers:
  - An integer must have at least one digit
  - An integer must not have a decimal point
  - An integer can be either positive or negative
  - Integers can be specified in: decimal (base 10), hexadecimal (base 16), octal (base 8), or binary (base 2) notation
:
```php
<?php
$x = 5985;
var_dump($x);
?>
```
#### PHP Float
A float (floating point number) is a number with a decimal point or a number in exponential form.

In the following example $x is a float:
```php
<?php
$x = 10.365;
var_dump($x);
?>
```
#### PHP Boolean
A Boolean represents two possible states: `true` or `false`.
Booleans are often used in conditional testing. You will learn more about conditional testing in a later chapter of this tutorial.
:
```php
<?php
$x = true;
$y = false;
var_dump($x,$y);
?>
```
#### PHP Array
An array stores multiple values in one single variable.

You can declare an array using the the `array()` function.
:
```php
<?php
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
?>
```
#### PHP Object
Classes and objects are the two main aspects of object-oriented programming.

A class is a template for objects, and an object is an instance of a class.

When the individual objects are created, they inherit all the properties and behaviors from the class, but each object will have different values for the properties.

Let's assume we have a class named Car. A Car can have properties like model, color, etc. We can define variables like $model, $color, and so on, to hold the values of these properties.

When the individual objects (Volvo, BMW, Toyota, etc.) are created, they inherit all the properties and behaviors from the class, but each object will have different values for the properties.

If you create a __construct() function, PHP will automatically call this function when you create an object from a class.
```php
<?php
class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("black", "Volvo");
echo $myCar -> message();
echo "<br>";
$myCar = new Car("red", "Toyota");
echo $myCar -> message();
?>
```
#### PHP NULL Value
Null is a special data type which can have only one value: NULL.

A variable of data type NULL is a variable that has no value assigned to it.

Tip: If a variable is created without a value, it is automatically assigned a value of NULL.

Variables can also be emptied by setting the value to NULL:
```php
<?php
$x = "Hello world!";
$x = null;
var_dump($x);
?>
```
#### PHP Resource
The special resource type is not an actual data type. It is the storing of a reference to functions and resources external to PHP.

A common example of using the resource data type is a database call.

We will not talk about the resource type here, since it is an advanced topic.

### 5. Strings and String Methods
A string is a sequence of characters, i.e it's characters can be accessed like an numeric array.

```php
    <?php
    $my_string = "Hello world!";
    echo $my_string[4]; // outputs 'o'
    echo $my_string[5]; // outputs ' ' i.e white space character
    ?>
```

#### String Methods
Here are some methods/functions used for string-related operations. The full list can be seen [here](https://www.w3schools.com/php/php_ref_string.asp)

1. `strlen(string)` - returns the length of a String
    ```php
    <?php
    echo strlen("Hello world!"); // outputs 12
    ?>
    ```
2. `str_word_count(string,return,char)` - counts and returns the number of words in a String
    ```php
    <?php
    echo str_word_count("Hello world!"); // outputs 2
    ?>
    ```
3. `strrev(string)` - returns the reversed version of a String
    ```php
    <?php
    echo strrev("Hello world!"); // outputs !dlrow olleH
    ?>
    ```
4. `strpos(string,find,start)` - searches for a text in the string and returns the character position of the first match
    ```php
    <?php
    echo strpos("I love php, I love php too!","php"); // outputs 7
    ?>
    ```
5. `str_replace(find,replace,string,count)` - replaces some characters with some other characters in a string and returns the new string.
    ```php
    <?php
    echo strlen("Hello world!"); // outputs 12
    ?>
    ```
6. `explode(separator,string)` - breaks the words in a string into an array and returns the array
    ```php
    <?php
    $str = "Hello world. It's a beautiful day.";
    print_r (explode(" ",$str)); // Array ( [0] => Hello [1] => world. [2] => It's [3] => a [4] => beautiful [5] => day. )
    ?>
    ```
7. `implode(separator,string)` or `join(separator,string)` - returns a string from the elements of an array
    ```php
    <?php
    $arr = array('Hello','World!','Beautiful','Day!');
    echo join(" ",$arr); // outputs Hello World! Beautiful Day!
    ?>
    ```
8. `str_split(string,length)` - splits a string into an array, returns the array
    ```php
    <?php
    print_r(str_split("Hello",3));// outputs Array ( [0] => Hel [1] => lo )
    ?>
    ```
9. `strtolower(string)` - converts a string to lowercase, returns the string
    ```php
    <?php
    echo strtolower("Hello WORLD!"); // outputs hello world!
    ?>
    ```
10. `strtoupper(string)` - converts a string to uppercase, returns the string
    ```php
    <?php
    echo strtoupper("Hello WORLD!"); // outputs HELLO WORLD!
    ?>
    ```
11. `trim(string,charlist)` - removes characters in the `charlist`(or whitespace if not specified )from both sides of a string.
Related functions:

    - `ltrim(string,charlist)` - Removes whitespace or other predefined characters from the left side of a string
    - `rtrim(string,charlist)` - Removes whitespace or other predefined characters from the right side of a string

    ```php
    <?php
    $str = "Hello World!";
    echo $str . "<br>";
    echo trim($str,"Hed!"); // outputs llo Worl
    ?>
    ```
12. `ucfirst(string)` - converts the first character of a string to uppercase.
Related functions:

    - `lcfirst(string)` - converts the first character of a string to lowercase
    - `ucwords(string)` - converts the first character of each word in a string to uppercase
    - `strtoupper(string)` - converts a string to uppercase
    - `strtolower(string)` - converts a string to lowercase
    ```php
    <?php
    $arr = array('Hello','World!','Beautiful','Day!');
    echo join(" ",$arr); // outputs Hello World! Beautiful Day!
    ?>
    ```
13. `ucwords(string)` - converts the first character of each word in a string to uppercase.
Related functions:

    - `ucfirst(string)` - converts the first character of a string to uppercase
    - `lcfirst(string)` - converts the first character of a string to lowercase
    ```php
    <?php
    $arr = array('Hello','World!','Beautiful','Day!');
    echo join(" ",$arr); // outputs Hello World! Beautiful Day!
    ?>
    ```

### 5. Numbers and Number Methods

#### Integers
2, 256, -256, 10358, -179567 are all integers.

An integer is a number without any decimal part.

An integer data type is a non-decimal number between -2147483648 and 2147483647 in 32 bit systems, and between -9223372036854775808 and 9223372036854775807 in 64 bit systems. A value greater (or lower) than this, will be stored as float, because it exceeds the limit of an integer.

**Note**: Another important thing to know is that even if 4 * 2.5 is 10, the result is stored as float, because one of the operands is a float (2.5).

Here are some rules for integers:

  - An integer must have at least one digit
  - An integer must NOT have a decimal point
  - An integer can be either positive or negative
  - Integers can be specified in three formats: decimal (10-based), hexadecimal (16-based - prefixed with 0x) or octal (8-based - prefixed with 0)

PHP has the following predefined constants for integers:

  - `PHP_INT_MAX` - The largest integer supported
  - `PHP_INT_MIN` - The smallest integer supported
  - `PHP_INT_SIZE` -  The size of an integer in bytes

PHP has the following functions to check if the type of a variable is integer:

  - `is_int(number)`
  - `is_integer(number)` - alias of is_int()
  - `is_long(number)` - alias of is_int()


#### Floats
A float is a number with a decimal point or a number in exponential form.

2.0, 256.4, 10.358, 7.64E+5, 5.56E-5 are all floats.

The float data type can commonly store a value up to 1.7976931348623E+308 (platform dependent), and have a maximum precision of 14 digits.

PHP has the following predefined constants for floats (from PHP 7.2):

  - PHP_FLOAT_MAX - The largest representable floating point number
  - PHP_FLOAT_MIN - The smallest representable positive floating point number
  - PHP_FLOAT_MAX - The smallest representable negative floating point number
  - PHP_FLOAT_DIG - The number of decimal digits that can be rounded into a float and back without precision loss
  - PHP_FLOAT_EPSILON - The smallest representable positive number x, so that x + 1.0 != 1.0

PHP has the following functions to check if the type of a variable is float:

  - is_float()
  - is_double() - alias of is_float()

```php
<?php
$x = 10.365;
var_dump(is_float($x));
echo "<br>";
echo(PHP_FLOAT_MAX);
?>
```
#### PHP Infinity
A numeric value that is larger than PHP_FLOAT_MAX is considered infinite.

PHP has the following functions to check if a numeric value is finite or infinite:

  - `is_finite(number)`
  - `is_infinite(number)`

```php
<?php
$x = 1.9e411;
var_dump($x);
?>
```

#### PHP NaN
NaN stands for Not a Number.

PHP has the following functions to check if a value is not a number:
  - `is_nan(number)`

NaN is used for impossible mathematical operations. Invalid calculation will return a NaN value:
```php
<?php
$x = acos(8);
var_dump($x);
echo (is_nan($x));
?>
```

#### Numerical Strings
The PHP is_numeric() function can be used to find whether a variable is numeric. The function returns true if the variable is a number or a numeric string, false otherwise.
```php
<?php
$x = 5985;
var_dump(is_numeric($x));

$x = "5985";
var_dump(is_numeric($x));

$x = "59.85" + 100;
var_dump(is_numeric($x));

$x = "Hello";
var_dump(is_numeric($x));
?>
```

#### Casting Strings and Floats to Integers
Sometimes you need to cast a numerical value into another data type.

The `(int)`, `(integer)`, or `intval()` function are often used to convert a value to an integer.

```php
<?php
// Cast float to int
$x = 23465.768;
$int_cast = intval($x);
var_dump($int_cast);

echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = intval($x);
var_dump($int_cast);
?>
```

### 7. Arrays and Array Methods