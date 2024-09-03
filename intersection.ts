interface IWorker {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
}

interface ICompany {
  companyId: string;
}

export type Consultant = IWorker & ICompany;

export let consultant!: Consultant;

consultant.id = 'id123';
