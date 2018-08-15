
export class Order {   
    billingAccountNumber:string;
    customerId:string;
    orderNumber:string;
    thumbnail:string;
    artistId:string;
  }
  
  export class OrderItems { 
    product:string;
    action:string;
    customerAgreedDate:string;
    price:number;
   
    promIntegrationId:string;
    serviceId:string;
    status:string;
    subStatus:string;
  }
  
  export class responselist{
      order : Order;
      orderItems: Array<OrderItems>;
  }
  
  
  