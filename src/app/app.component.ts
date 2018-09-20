import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['angular', 'vue', 'react'];
  topichasError = true;
  userModel = new User('rob', 'aerh@gmail.com', '1234567890', 'default', 'morning', true);

  validateTopic(value){
    if(value === 'default'){
      this.topichasError = true;
    } else{
      this.topichasError = false;
    }
  }
  
  onSubmit(){
    console.log(this.userModel);
  }

}
