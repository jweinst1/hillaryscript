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
###Taxes

In HillaryScript, everyone has to pay their taxes. America needs good infratsructure support, 
###TellThePeople

In order to broadcast messages to the citizens of America in HillaryScript, you must use a special function called `TellThePeople`. It works like this:

```
> TellThePeople(6, 7)
6
7

> TellThePeople("foo")
foo
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

```
These can be referred to and enforced like SenateBills.

###Hillary Quotes:

In HillaryScript, one needs a way of connecting Hillary's message to what the people of America are saying. In most languages, when you want to check if a string matches some pattern, you would use a regular expression.

Regular Expressions cannot capture the mission and hope embedded in Hillary's words. Therefore, we must use a hillary quote, denoted by `~h~` markers. These quotes are used with strings to match and search them:

```
> ~h~[0-9]+~h~.test("6483785");
true
```

###ElectionDay

In HillaryScript, to properly arrange voters, the citizens of America, and the desires they have to change this country, we need to use objects. Objects are collections of keys and values, or in politics we might call them causes and effects. Here is an example of an object:

```
{$ a:6 $}
```

Now, say that we want a template for an object like this. How do we do that? We cna use a combo of the power of senate bills with a special keyword, `ElectionDay`. Watch this:

```
SenateBill foo() {$
    this.a = 6;
$}

> vote f = ElectionDay foo();
> f.a
6
```
Objects are excellent features in HillaryScript for making amazing code and spreading the message of Hillary Clinton!

###SUPER-PAC

A `SUPER-PAC` is a special data structure within HillaryScript, that works very much like arrays in other languages. However, arrays can't really support candidates in elections. We need data structures that will stand by Hillary every step of the way, no matter what happens.

A SUPER-PAC is also always denoted with special brackets, `$[` and `]$`

Here are a few exmaples of what you can do with a SUPER-PAC:

```
> vote a = $[1, 2, 3]$
> a[1]
2
> a.push(4)
> a
$[1, 2, 3, 4]$
> a.length
4
```

SUPER-PAC's can also bee utilized by America to loop through their donations and inspect them, to insure there is no corruption or fraudulent activity going on.

###America

America is an amazing and beautiful country that we all love and cherish. It is the symbol of freedom and liberty to the world. However, America serves a special purpose in HillaryScript. They loop through SUPER-PAC's contents, in order to perform certain governmental actions on them. For example:

```
America(vote i =0;i<5;i++) {$
    TellThePeople(i);
$}

0
1
2
3
4

```

###HillarySays(Conditionals)

In HillaryScript, we need a way of telling what statements were for, what we additionally support, and what we are absolutely against. To stand in politics requires taking a position on the topics that are meaningful to you. Such as:

```
hillarysays(5 > 4) {$
    deport 6
$} 

obamasays(4 > 3) {$
   deport 3
$}

trumpsays {$ 
   TellThePeople("YYYUUUUUGGGEEEE")
$}
```

###Special Legislatures

In HillaryScript, there are a group of special legislations, one which have powers beyond senate voted or house voted bills. They are so unique and powerful, only three of them exist. They are:

`Trump()`

`Obama()`

and of course:

`Hillary()`

Each of them have their own, mysterious, yet inspirational uses that can shape the vision of the American people, in both good or bad ways. Here are a few examples.

*Note*: The Special Legislatures are activated at the time of transcompilation, they aren't direct components of HillaryScript.

```
> Trump([1, 2, 3, 4])
["[false","1false",",false"," false","2false",",false"," false","3false",",false"," false","4false","]false"]

>Obama("foooobama")
["O","Progressive",1,"Hope",1,"(","The Future","f",7,7,7,7,"Progressive",1,"Hope",1,"The Future",")"]
```