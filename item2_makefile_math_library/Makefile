CC = gcc
CFLAGS = -Wall -fPIC
LIB = libmath.dylib
TARGET = main

# Building the shared library and executable main
all: $(LIB) $(TARGET)

# Creating the shared library from math.o
$(LIB): math.o
	$(CC) -dynamiclib -o $(LIB) math.o

# Compiling math.c into an object file
math.o: math.c math.h
	$(CC) $(CFLAGS) -c math.c

# Compiling main.c into an object file
main.o: main.c math.h
	$(CC) $(CFLAGS) -c main.c

# Linking the executable main with the shared library
$(TARGET): main.o $(LIB)
	$(CC) -o $(TARGET) main.o -L. -lmath

# Removing compiled files so we can rebuild from scratch
clean:
	rm -f *.o $(LIB) $(TARGET)

