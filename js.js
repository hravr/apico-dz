 document.write('<br>');
 document.write('<br>');
 //Завдання №2
  document.write("Сортування Групи за ім’ям");
  document.write('<br>');
let Students = [{ lastName: 'Vatras', firstName: 'Andriy', ratting: 60 },
{ lastName: 'Vashchuc', firstName: 'Muhaylo', ratting: 70 },
{ lastName: 'Hrynuc', firstName: 'Maxsum', ratting: 60 },
{ lastName: 'Daniv', firstName: 'Andriy', ratting: 80 },
{ lastName: 'Dayneca', firstName: 'Tenyna', ratting: 93 },
{ lastName: 'Dombrovscuy', firstName: 'Vasul', ratting: 90 },
{ lastName: 'Ivanuna', firstName: 'Vladyslav', ratting: 91 },
{ lastName: 'Kihtyk', firstName: 'Muhaylo', ratting: 80 },
{ lastName: 'Kruc', firstName: 'Muhaylo', ratting: 65 },
{ lastName: 'Manjula', firstName: 'Volodymyr', ratting: 60 },
{ lastName: 'Mohulnutskuy', firstName: 'Muhaylo', ratting: 60 },
{ lastName: 'Mundyak', firstName: 'Vitaliy', ratting: 75 },
{ lastName: 'Pshuc', firstName: 'Vitaliy', ratting: 60 },
{ lastName: 'Syhin', firstName: 'Maryan', ratting: 92 },
{ lastName: 'Stoyco', firstName: 'Volodymyr', ratting: 60 },
{ lastName: 'Stolyar', firstName: 'Muhaylo', ratting: 85 },
{ lastName: 'Tsumbalistuy', firstName: 'Artur', ratting: 82 },
{ lastName: 'Shandrovuch', firstName: 'Yra', ratting: 88 }]; 

Students.sort(function(a, b) {//Сортування за ім’ям
  
    if (a.firstName.toUpperCase() <  b.firstName.toUpperCase()) {
      return -1;
    }
    if (a.firstName.toUpperCase() >  b.firstName.toUpperCase()) {
      return 1;
    }
  
    return 0;
  });
for(let i=0;i<Students.length;i++)
   showStudents(i);

 document.write('<br>');
 document.write('<br>');
 document.write("Сортування Групи за балом");
   document.write('<br>');
 
 function showStudents(i){
	    document.write(Students[i].lastName + "   " + Students[i].firstName + "   " + Students[i].ratting);
    document.write('<br>');
 };
 
 
 
Students.sort(function(a,b){//Сортування за кількостю балів
	if(a.ratting > b.ratting){
		return 1;
	}
	if(a.ratting < b.ratting){
		return -1;
	}
	return 0;
});

for(let i=0;i<Students.length;i++)
 showStudents(i);

  document.write('<br>');
 
let minRatting=Students[0].ratting;
let maxRatting=Students[Students.length-1].ratting;

function maxMin(){//Знаходження студентів я вих максимальний і мінмальний бал.
	
	for(let i=0;i<Students.length;i++){
		if(Students[i].ratting==minRatting){
		document.write("Студент з найменшою оцінкою: "+Students[i].lastName + "   " + Students[i].firstName + "   " + Students[i].ratting);
		  document.write('<br>');
		}
		if(Students[i].ratting==maxRatting){
			document.write("Студент з набільшою оцінкою: "+Students[i].lastName + "   " + Students[i].firstName + "   " + Students[i].ratting);
		  document.write('<br>');
		}
	}
};
maxMin(); 


//Завдання №3
let Students1 = [{ lastName: 'Vatras', firstName: 'Andriy',ratting: 70, rate:0 },
{ lastName: 'Vashchuc', firstName: 'Muhaylo', ratting: 70, rate:0},
{ lastName: 'Hrynuc', firstName: 'Maxsum', ratting: 60 , rate:0},
{ lastName: 'Daniv', firstName: 'Andriy', ratting: 80 , rate:0},
{ lastName: 'Dayneca', firstName: 'Tenyna', ratting: 93 , rate:0},
{ lastName: 'Dombrovscuy', firstName: 'Vasul', ratting: 90 , rate:0},
{ lastName: 'Ivanuna', firstName: 'Vladyslav', ratting: 91 , rate:0},
{ lastName: 'Kihtyk', firstName: 'Muhaylo', ratting: 80 , rate:0},
{ lastName: 'Kruc', firstName: 'Muhaylo', ratting: 65 , rate:0},
{ lastName: 'Manjula', firstName: 'Volodymyr', ratting: 60 , rate:0},
{ lastName: 'Mohulnutskuy', firstName: 'Muhaylo', ratting: 60 , rate:0},
{ lastName: 'Mundyak', firstName: 'Vitaliy', ratting: 75 , rate:0},
{ lastName: 'Pshuc', firstName: 'Vitaliy', ratting: 60 , rate:0},
{ lastName: 'Syhin', firstName: 'Maryan', ratting: 92 , rate:0},
{ lastName: 'Stoyco', firstName: 'Volodymyr', ratting: 60 , rate:0},
{ lastName: 'Stolyar', firstName: 'Muhaylo', ratting: 85 , rate:0},
{ lastName: 'Tsumbalistuy', firstName: 'Artur', ratting: 82 , rate:0},
{ lastName: 'Shandrovuch', firstName: 'Yra', ratting: 88 , rate:0}]; 

 document.write('<br>');
 document.write('<br>');
 Students1.sort(function(a,b){
	if(a.ratting > b.ratting){
		return 1;
	}
	if(a.ratting < b.ratting){
		return -1;
	}
	return 0;
});
 function computeRate()
 {
	for(let i=0;i<Students1.length;i++){
		Students1[i].rate= ((maxRatting*100)/Students1[i].ratting)-100;
		document.write(Students1[i].lastName + "   " + Students1[i].firstName + " -  " + Students1[i].rate+"%");
        document.write('<br>');
	}
	 
	 
	 
	 
	 
 };	
 computeRate();
 
 
 
//Завдання №4
var string="qwertyuiopasdfghjklzxvbnm1234567890 /'.,][#!@$%^&*()_=";
var arr=string.split('');
let input = document.querySelector('.Pasword');
let button = document.querySelector('button ');
button.onclick= function(){
	
	let Number=input.value;
   let Password='' ;
     for(var i=0;i<Number;i++){
	Password += arr[Math.floor(Math.random() * arr.length)];
	
}
alert(Password);
}
