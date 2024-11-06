export interface EmployeeModel {
    employeeId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    presentAddress: string;
    permanentAddress: string;
    dateOfBirth: string; // Can also use Date type, but match format from API
    departmentId: number;
    userId: number;
    hireDate: string;
    currentSalary: number;
    isActive: boolean;
    employeeImage?: string;
    createdAt: string;
    updatedAt: string;
  }
  