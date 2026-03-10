// Importing dependencies
#include <stdio.h>      // Allows use to use printf()
#include "math.h"       // Inclues the math library functions

// Addition
double add(double a, double b)
{
    return a + b;
}

// Subtraction
double subtract(double a, double b)
{
    return a - b;
}

// Multiplication
double multiply(double a, double b)
{
    return a * b;
}

// Division
double divide(double a, double b)
{
    if (b == 0)
    {
        printf("Error: division by zero\n");
        return 0;
    }
    return a / b;
}

