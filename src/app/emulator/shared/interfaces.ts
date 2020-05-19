export interface IGenericRepository<T> {
  getAll(): T[];
  getById(id: any): T;
  insert(obj: T): void;
  update(obj: T): void;
  delete(id: any): void;
  save(): void;
}
