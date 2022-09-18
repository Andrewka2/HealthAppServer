import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import { UserData } from '../interfaces/userData.interface';
import { User } from '../interfaces/users.interface';
import UserDataService from '../services/userData.service';
import userService from '../services/users.service';

class UsersController {
  public userService = new userService();
  public userDataService = new UserDataService();

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: User[] = await this.userService.findAllUser();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {    
    try {
      const userId = String(req.query.id);
      console.log(userId);
      
      const findOneUserData: User = await this.userService.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log("HERE IS THE LOG");
      console.log(req);
      
      console.log(req.body['data'][0]);
      console.log(typeof req.body['data'][0].customId);
      
      let createUserDetail: UserData;
      const userData: CreateUserDto = req.body['data'][0];
      const createUserData: User = await this.userService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
      
      if(req.body['data'].length > 1) {
        console.log('here');
        
        const userDetail: UserData = req.body['data'][1];
        createUserDetail = await this.userDataService.saveUserData(userDetail);
      }
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      let ObjectId = require('mongodb').ObjectId;

      const userId = ObjectId(req.params.id);
      const userData: User = req.body;
      const updateUserData: User = await this.userService.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      let ObjectId = require('mongodb').ObjectId;

      const userId = ObjectId(req.params.id);
      const deleteUserData: User = await this.userService.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
