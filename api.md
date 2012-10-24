#MyBoard API

###Endpoints
* /board
    * get - /board - returns a board
* /sticky
    * get - /sticky/id - returns a single sticky
    * put - /sticky/id - takes a sticky - returns only http status codes
    * post - /sticky - takes a sticky - returns the new id
    * delete - /sticky/id - returns only http status codes

###Models
* Board

```
{ 
  stickies: [
	sticky,
	sticky,
	[...]
  ]
}
```

* Sticky

``` 
{
	id: "[seq number]",
	content: "User Generated", [optional]
	x: horizontal position on the board, [numeric]
	y: vertical position on the board, [numeric]
	height: 100, [numeric]
	width: 100
}
```
