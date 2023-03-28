import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormCreatorComponent extends Component {
  @tracked formItems = [];

  @action
  add(what) {
    // https://stackoverflow.com/questions/57468327/why-wont-my-tracked-array-update-in-ember-octane
    // this.formItems.push(what);
    this.formItems = [...this.formItems, what];
    console.log(this.formItems);
  }  
}