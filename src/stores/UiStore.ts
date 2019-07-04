import { observable, configure, computed, action } from 'mobx';

configure({ enforceActions: "always" })

export default class UiStore {
  @observable
  githubProjects = []
  state = "pending"

  @action
  fetchProjects() {
    this.
  }
  
}