import { faker } from "@faker-js/faker";

interface Company {
  cod: number;
  supplier_filter: string;
  name: string;
  cnpj: string;
  cep: string;
  standard_lead_time: number;
  lead_time: number;
  standard_coverage: number;
  coverage: number;
  created_at: Date;
  updated_at: Date;
}

export const createRandomCompany = (): Company => {
  return {
    cod: +faker.random.numeric(), // another example -> how to use numeric
    supplier_filter: faker.company.companySuffix(),
    name: faker.company.name(),
    cnpj: faker.random.numeric(14),
    cep: faker.random.numeric(8),
    standard_lead_time: faker.datatype.number({ min: 0, max: 20 }),
    lead_time: faker.datatype.number({ min: 0, max: 20 }),
    standard_coverage: faker.datatype.number({ min: 0, max: 20 }),
    coverage: faker.datatype.number({ min: 0, max: 20 }),
    created_at: faker.date.birthdate(),
    updated_at: new Date(),
  };
};

console.log("Company data: ");
console.table(createRandomCompany());
