import { ObjectID } from "typeorm";
import { CreateUserDto } from "../dtos/users.dto";
import { Doctor } from "../interfaces/doctor.interface";
import { DoctorAuth } from "../interfaces/doctorAuth.interface";
import { EventData } from "../interfaces/event.interface";
import { Specializations } from "../interfaces/specializations.interface";
import { UserData } from "../interfaces/userData.interface";
import DoctorService from "../services/doctor.service"
import DoctorAuthService from "../services/doctorAuth.service";
import EventDataService from "../services/event.service";
import SpecializationsService from "../services/specializations.service";
import UserDataService from "../services/userData.service";
import UserService from "../services/users.service";

class DBtests {
    private testDoctor: Doctor = {
        firstName: 'Ієзекіїль',
        lastName: 'Лампадович',
        workPhone: '+380930000666',
        workEmail: 'iesakiil@gmail.com',
        workAddressCity: 'Київ',
        workAddressStreet: 'вул. Перемоги',
        workAddressBuilding: '21',
        workAddressCabinet: '322'
    }

    private testEvent: EventData = {
        name: "testEvent",
        type: "regular",
        desc: "wqeew"
    }

    private testDoctorAuth: DoctorAuth = {
        email: "testDoctor1@gmail.com",
        password: "passw0rd",
        certificateId: 1
    }

    private testSpecialization: Specializations = {
        name: "Dantist"
    }

    private userFields: CreateUserDto = {
        email: "testUser1@gmail.com",
        password: "password"
    }

    private testUserData: UserData = {
        firstName: 'Ликаріон',
        lastName: 'Лукіліанович',
        // user: new ObjectID(),
        Phone: '+380930000777',
        Email: 'lykarion@gmail.com',
        AddressCity: 'Київ',
        AddressStreet: 'вул. Перемоги',
        AddressBuilding: '21',
        AddressAppartment: '322'
    }

    public insertDoctor(){
        let doctor = new DoctorService();
        doctor.saveDoctor(this.testDoctor)
        console.log('doctor passed');
    }

    public insertUser() {
        let user = new UserService()
        user.createUser(this.userFields)
        console.log('user passed');
    }

    public insertUserData(){
        let userData = new UserDataService()
        userData.saveUserData(this.testUserData)
        console.log('user data passed');
    }

    public insertDoctorAuth(){
        let userData = new DoctorAuthService()
        userData.saveDoctorAuth(this.testDoctorAuth)
        console.log('doctor auth passed');
    }

    public insertSpecialization(){
        let userData = new SpecializationsService()
        userData.saveSpecializations(this.testSpecialization)
        console.log('Specialization passed');
    }
    
    public insertEventData(){
        let userData = new EventDataService()
        userData.saveEventData(this.testEvent)
        console.log('EventData passed');
    }
}

export default DBtests