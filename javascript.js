document.write('Jobs <br>');
var str="Career <br>";
document.write(str);
var strname = new String("Training <br>");
document.write(strname);

emp={id:101,name:"Shyam Kumar",salary:40000}
document.write(emp.id+" "+emp.name+" "+emp.salary+'<br>');
var em = new Object();
em.id=102;
em.name='Ravi Malik';
em.salary=50000;
document.write(em.id+" "+em.name+" "+em.salary+'<br>');

function empl(id,name,salary)
{
  this.id=id;
  this.name=name;
  this.salary=salary;
}
e=new empl(103,'Priya Sharma',30000);
document.write(e.id+" "+e.name+" "+e.salary+'<br>');

var empp=['Suresh','Amit','Ratan'];
for (i=0;i<empp.length;i++)
{
  document.write(empp[i]+'<br>');
}

var i;
var emm = new Array();
emm[0]='Arun';
emm[1]='Varun';
emm[2]='John';
for(i=0;i<emm.length;i++)
{
  document.write(emm[i]+'<br>')
}

var employee=new Array('Jai','Vijay','Smith');
for(i=0;i<employee.length;i++)
{
  document.write(employee[i]+'<br>')
}

