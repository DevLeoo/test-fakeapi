import { faker } from "@faker-js/faker";

interface Company {
  cod: number;
  name: string;
  cnpj: string;
  cep: string;
  lead_time: number;
  created_at: Date;
  updated_at: Date;
}

export const createRandomCompany = (): Company => {
  return {
    cod: +faker.random.numeric(), // another example -> how to use numeric
    name: faker.company.name(),
    cnpj: faker.random.numeric(14),
    cep: faker.random.numeric(8),
    lead_time: faker.datatype.number({ min: 0, max: 20 }),
    created_at: faker.date.birthdate(),
    updated_at: new Date(),
  };
};

console.log("Company data: ");
console.table(createRandomCompany());
