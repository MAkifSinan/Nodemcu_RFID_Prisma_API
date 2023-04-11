const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createUser(x,y,t,q) {
   const date= new Date();
   user = await prisma.user.create({
    data: {
      cart_id: x,
      location: y,
      time: date,
      device_count:q,
      extra_info: t
    }
  });

  console.log(user);
}

createUser("007","london","7","succesfull") // deneme amaçlı kullanım
