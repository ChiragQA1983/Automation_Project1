import{epxect} from '@playwright/test';

export default class RegistrationPage
{
    constructor(page)
    {
       this.page=page;
       this.onlinetrainings=page.getByRole("link",{name:'Online Trainings'});
       this.register=page.getByRole("link",{name:'Register'});
        

    }




}
