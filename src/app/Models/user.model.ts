export interface UserEntity {
    id: string
    firstName: string
    lastName: string
    email: string
    dob: string
    favouriteColour: string
    age: number
    ageplus20: number
  }

  export interface UserEntities{
    userEntities: UserEntity;
  }