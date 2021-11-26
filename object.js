var Person=
{
    FirstName:"",
    LastName:"",
    OfficeAddress:
    {
       DNumber:"",
       City:"",
       Pincode:"",
    },
};
 
Person.p1=new Object();
Person.p1.FirstName="Deepak";
Person.p1.LastName="kolaparthi";
Person.p1.OfficeAddress.DNumber="1-23";
Person.p1.OfficeAddress.City="Chennai";
Person.p1.OfficeAddress.Pincode="534320";
console.log(Person.p1);

Person.p2=new Object();
Person.p2.FirstName="Raj";
Person.p2.LastName="Kapoor";
Person.p2.OfficeAddress.DNumber="88/2-3";
Person.p2.OfficeAddress.City="Delhi";
Person.p2.OfficeAddress.Pincode="800456";
console.log(Person.p2);

p3=new Object();
Person.p3.FirstName="Mark";
Person.p3.LastName="Emanuel";
Person.p3.OfficeAddress.DNumber="67-8";
Person.p3.OfficeAddress.City="Nagpur";
Person.p3.OfficeAddress.Pincode="709531";
console.log(Person.p3);
