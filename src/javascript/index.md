# Introducción

## Conceptos

### Comentarios

### Declaraciones

- var
- let
- const

### Tipos de datos

- String
- Number
- Boolean
- Array
- Object
- null
- undefined

### Operadores aritméticos

#### Suma o adición (+)

Sintaxis:

``` js
x + y
```

Ejemplos:

``` js
// Número + Número = Adición
1 + 2 // 3

// Bolean + Número = Adición
true + 1 // 2

// Bolean + Bolean // Adición
false + false // 0

// Número + String = Concatenación
5 + 'foo' // "5foo"

// String + Bolean = Concatenación
'foo' + true // "footrue"

// String + String = Concatenación
'foo' + 'bar' // "foobar"
```

#### Resta o sustracción (-)

Sintaxis:

``` js
x - y
```

Ejemplos:

``` js
5 - 3 // 2
3 - 5 // -2
'foo' - 3 // NaN
```

#### División (/)

Sintaxis:

``` js
x / y
```

Ejemplos:

``` js
1 / 2 // 0.5
1.0 / 2.0 // 0.5
2.0 / 0 // Infinity
2.0 / 0.0 // Infinity
2.0 / -0.0 // -Infinity
```

#### Multiplicación (*)

Sintaxis:

``` js
x * y
```

Ejemplos:

``` js
2 * 2 // 4
-2 * 2 // -4
Infinity * 0 // NaN
Infinity * Infinity // Infinity
'foo' * 2 // NaN
```

#### Resto o residuo (%)

Sintaxis:

``` js
x % y
```

Ejemplos:

``` js
12 % 5 // 2
-1 % 2 // -1
1 % -2 // 1
NaN % 2 // NaN
1 % 2 // 1
2 % 3 // 2
-4 % 2 // -0
5.5 % 2 // 1.5
```

#### Exponenciación (**)

Sintaxis:

``` js
x ** y
```

Ejemplos:

``` js
2 ** 3 // 8
3 ** 2 // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN

2 ** 3 ** 2 // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64

-(2 ** 2) // -4
(-2) ** 2 // 4
```

#### Incremento

Sintaxis:

``` js
x++
++x
```

Ejemplos:

``` js
var x = 3;
y = x++; // y = 3, x = 4

var a = 2;
b = ++a; // a = 3, b = 3
```

#### Decremento

Sintaxis:

``` js
x--
--x
```

Ejemplos:

``` js
var x = 3;
y = x--; // y = 3, x = 2

var a = 2;
b = --a; // a = 1, b = 1
```

#### Negación unaria

Sintaxis:

``` js
-x
```

Ejemplos:

``` js
var x = 3;
y = -x; // y = -3, x = 3

var x = "4";
y = -x; // y = -4
```

#### Unario más

Sintaxis:

``` js
+x
```

Ejemplos:

``` js
+3     // 3
+'3'   // 3
+true  // 1
+false // 0
+null  // 0
+function(val){  return val } // NaN
```


### Funciones

- Parametros
- Ánonimas
- Flecha

### Condiciones

- if
- if/else
- if/else if
- switch

### Operadores lógicos

- AND: `&&`
- OR: `||`
- NOT: `!`

### Bucles

### DOM
