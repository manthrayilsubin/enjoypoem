const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./chinook.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

//db.run('CREATE TABLE WorkProduct(Wrk_Id INTEGER PRIMARY KEY AUTOINCREMENT,Wrk_Word           TEXT    NOT NULL,Wrk_Left            INT  ,Wrk_Right        INT,Wrk_UniqueWordPos INT,Wrk_UniqueLinePos INT,Wrk_PoemId INT,Wrk_UserId INT);');
db.run('insert into WorkProduct (Wrk_Word) values("test")')
let sql = 'SELECT * FROM WorkProduct ORDER BY Wrk_Id';

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    //console.log(row.Wrk_Id);
  });
});
class WorkProdRow {

  constructor(Wrk_Word,Wrk_Left,Wrk_Right,Wrk_UniqueWordPos,Wrk_UniqueLinePos,Wrk_PoemId,Wrk_UserId) {
    this.Wrk_Word = Wrk_Word;
    this.Wrk_Left = Wrk_Left;
    this.Wrk_Right = Wrk_Right;
    this.Wrk_UniqueWordPos = Wrk_UniqueWordPos;
    this.Wrk_UniqueLinePos = Wrk_UniqueLinePos;
    this.Wrk_PoemId = Wrk_PoemId;
    this.Wrk_UserId = Wrk_UserId;
  }

  sayHi() {
    alert(this.name);
  }

}
let inpline="This is subinbabu in the midst of cry\nInmy ways he is great\n";
let initialInp=splitStr(inpline,"\n");
let linewords="";
let WorkProdList=[];
let wrkLeftPointer=wrkRightPointer=wrkLinePosPointer=wrkWordPosPointer=0;
let currentPointer=0;
for (var indLine in initialInp)
{
  
  linewords=splitStr(initialInp[indLine]," ");
  
  wrkLeftPointer=wrkRightPointer=wrkWordPosPointer=0;
  wrkLinePosPointer++;
  for(var lineword in linewords)
  {
currentPointer=parseInt(lineword);
//console.log(linewords[currentPointer+1]);
if(typeof linewords[currentPointer-1]=="undefined" && typeof linewords[currentPointer+1]!="undefined")
{
  WorkProdList.push(new WorkProdRow(linewords[lineword],0,currentPointer+1,currentPointer,wrkLinePosPointer,5,6));
}
else if(typeof linewords[currentPointer-1]!="undefined" && typeof linewords[currentPointer+1]=="undefined")
{
  WorkProdList.push(new WorkProdRow(linewords[lineword],currentPointer-1,0,currentPointer,wrkLinePosPointer,5,6));
}
else if(typeof linewords[currentPointer-1]!="undefined" && typeof linewords[currentPointer+1]!="undefined")
{
  WorkProdList.push(new WorkProdRow(linewords[lineword],currentPointer-1,currentPointer+1,currentPointer,wrkLinePosPointer,5,6));
}
  }
}


console.log(WorkProdList);
db.close();

function splitStr(str, separator) {
     
    // Function to split string
    var string = str.split(separator);
     
   // console.log(string);
    return string;
}