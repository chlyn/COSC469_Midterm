// Importing dependencies
#include <stdio.h>      // Allows us to use printf() and scanf() for input/output
#include "math.h"       // Includes the math library functions

int main(void)
{

    // Declaring two variables to sotre user input numbers
    double a, b;


    // Prompting the user to input their numbers
    printf("\n===================== Input =====================\n\n");

    printf("Enter first number: ");
    scanf("%lf", &a);

    printf("Enter second number: ");
    scanf("%lf", &b);

    // Performing all math operations using shared library function
    // Then displaying all outputs
    printf("\n==================== Results ====================\n\n");

    printf("Addition: %.2f + %.2f = %.2f\n", a, b, add(a, b));
    printf("Subtraction: %.2f - %.2f = %.2f\n", a, b, subtract(a, b));
    printf("Multiplication: %.2f * %.2f = %.2f\n", a, b, multiply(a, b));
    printf("Division: %.2f / %.2f = %.2f\n", a, b, divide(a, b));

    printf("\n=================================================\n\n");

    return 0;
}
