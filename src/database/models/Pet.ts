// src/database/models/Pet.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../setup/database'

interface PetAttributes {
  id: number;
  name: string;
  species: string;
  age: number;
}

export interface PetCreationAttributes extends Optional<PetAttributes, 'id'> {}

class Pet extends Model<PetAttributes, PetCreationAttributes> implements PetAttributes {
  public id!: number;
  public name!: string;
  public species!: string;
  public age!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Pet.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  species: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'pets',
});

export default Pet;

