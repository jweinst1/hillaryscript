#HillaryScript

`From the makers of BernieScript...`

HillaryScript is a programming language based on Hillary Clinton and her campaign for the presidency. It uses fun, hilarious syntax which gets right down to the nooks and crannies of writing a program.

The language transcompiles to JavaScript, so it's easy to use and experiment with. However, the language has quite a few special features that will get you pumped for election season.

##Installation

To install HillaryScript, you need to have NodeJS installed on your computer. In your terminal type:

```
npm install -g hillaryscript
```

##Language Guide

`HillaryScript` is a special language, because instead of using traditional constructs, like `for` loops, it is composed of a set of features far more representative of the principles of democracy, Hillary's campaign, and America.

###`CORRUPTION:`

Since a government always has the chance to become corrupt, HillaryScript is no different. Everytime you compile a `.hillary` file, the compiler may produce a corrupted output. A classfied example of this is as follows:

```
example.hillary
--------
vote a = 7
vote b = ExecutiveAction(){$ $}
```

Output:

```
v$$r* = $$**$$7
$$$$****$$$$$ function($$$$){}
```

One must take time and consideration to prevent such programs not becoming corrupt. Through trial and error, a programmer will adapt to producing corruption-free code.

###Voting

One of the most important aspects of HillaryScript, and democracy is voting. One cannot be a truly free and liberated citizen without exercising their right to vote. 

In HillaryScript, voting assigns some value to a name. For example:

```
vote f = 6
```

Now in any succeeding statement, the name f corresponds to the value 6. However, reassigning `f` through another vote statement erases the previous value. This is also good because people are fickle, you can change who you want to vote for before election day.

###Being With Her (Operators)

In most programming languages, operators are used to perform simple tasks like addition, subtraction, assignment, and more. However, HillaryScript doesn't just perform simple tasks, it brings people together under a common purpose, and unite them.

####Hill Plus

To perform addition in HillaryScript, also called unification, you use the `h+` operator. For example:

```
> 7 h+ 8
15
```

You can also use the Hill Plus operator for concatenation of strings.

```
> "Hillary" h+ "Clinton"
"HillaryClinton"
```

###Legislation

In order to facilitate and create laws that benefit the people of America, you must have legislation. In HillaryScript, legislation has two forms, a `SenateBill`, and `ExecutiveAction`. SenateBill's are always defined at the start of a line with the declaration `SenateBill`. They allow the execution of a series of statements, much like a function in other languages.

```
SenateBill a(b) {$
   deport b
$}
```

Here is a sample legislative bill. Here, `a` refers to the name of bill, and `b` are its components. Components are special parts of a bill that can be assigned just like variables. When you refer to or enforce a bill, you have to do so with proper arguments to support it's purpose. For example,

```
> a(8)
8
```
Will work, however,

```
> a()
BREACH OF POWER
```
When bills are called with improper numbers of arguments, depending on the type of bill, you could be committing a breach of power. HillaryScript is dedicated to keeping the checks and balances of the United States government, and will not allow that to happen.

#####ExecutiveAction

Another form of legislation HillaryScript allows you to enact is an ExecutiveAction. An `ExecutiveAction` lets you refer and create legislation on the fly, by voting for it yourself. This is a powerful vote, one that can only be used by the president herself. Here is an example:

```
vote person = ExecutiveAction(arg) {$
     deport arg h+ 4
$}