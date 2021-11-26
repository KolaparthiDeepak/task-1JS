var Person=
{
    FirstName:"first",
    LastName:"last",
    OfficeAddress:
    {
       DNumber:"123",
       City:"abc",
       Pincode:"12345",
    },
};
 
p1=new Object(Person);
 p1.FirstName="Deepak";
 p1.LastName="kolaparthi";
 p1.OfficeAddress.DNumber="1-23";
 p1.OfficeAddress.City="Chennai";
 p1.OfficeAddress.Pincode="534320";
 console.log(p1);

 p2=new Object(Person);
 p2.FirstName="Raj";
 p2.LastName="Kapoor";
 p2.OfficeAddress.DNumber="88/2-3";
 p2.OfficeAddress.City="Delhi";
 p2.OfficeAddress.Pincode="800456";
 console.log(p2);

 p3=new Object(Person);
 p3.FirstName="Mark";
 p3.LastName="Emanuel";
 p3.OfficeAddress.DNumber="67-8";
 p3.OfficeAddress.City="Nagpur";
 p3.OfficeAddress.Pincode="709531";
 console.log(p3);
