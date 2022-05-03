class Data{
  constructor (id,title,state,url,created_at,updated_at){
    this.id = id;
    this.title = title;
    this.state = state;
    this.url = url;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

const Sample = [new Data(1,"Angular runtime created components aren't listed in @ViewChildren",'open','https://api.github.com/repos/angular/angular/issues/45771', '2022-04-26T23:05:12Z','2022-05-03T00:06:16Z'),new Data(2,"Angular runtime created components aren't listed",'open','https://api.github.com/repos/angular/angular/issues/45771', '2022-04-26T23:05:12Z','2022-05-03T00:06:16Z')]

export default Sample;