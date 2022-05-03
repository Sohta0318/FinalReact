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

const Sample = [
  new Data(1223480279,"Type checking for host bindings",'open','https://api.github.com/repos/angular/angular/issues/45847', '2022-05-03T00:06:00Z','2022-05-03T00:06:16Z'),
new Data(1223172122,"Enable the `no-duplicate-enum-values` TSLint rule for the FW repo",'open','https://api.github.com/repos/angular/angular/issues/45843', '2022-05-02T17:57:54Z','2022-05-02T17:58:03Z'),
new Data(1222894563,"refactor(core): disallow standalone components in importProvidersFrom calls",'open','https://api.github.com/repos/angular/angular/issues/45837', '2022-05-02T13:31:47Z','2022-05-02T15:29:26Z'),
new Data(1221880328,"fix(ngcc): cope with packages following APF v14+",'open','https://api.github.com/repos/angular/angular/issues/45833', '2022-04-30T17:25:12Z','2022-04-30T21:15:00Z'),
new Data(1221867895,"Allow specifying providers inside @Injectable decorator",'open','https://api.github.com/repos/angular/angular/issues/45832', '2022-04-30T16:22:45Z','2022-04-30T21:48:01Z'),
new Data(1221862506,"chore(docs-infra): remove unnecessary types for stemmer dependency",'open','https://api.github.com/repos/angular/angular/issues/45831', '2022-04-30T15:57:27Z','2022-05-02T20:30:13Z'),
new Data(1,"Angular runtime created components aren't listed in @ViewChildren",'open','https://api.github.com/repos/angular/angular/issues/45771', '2022-04-26T23:05:12Z','2022-05-03T00:06:16Z'),
new Data(1223172122,"Enable the `no-duplicate-enum-values` TSLint rule for the FW repo",'open','https://api.github.com/repos/angular/angular/issues/45843', '2022-05-02T17:57:54Z','2022-05-02T17:58:03Z'),
new Data(1222894563,"refactor(core): disallow standalone components in importProvidersFrom calls",'open','https://api.github.com/repos/angular/angular/issues/45837', '2022-05-02T13:31:47Z','2022-05-02T15:29:26Z'),
new Data(1222894563,"refactor(core): disallow standalone components in importProvidersFrom calls",'open','https://api.github.com/repos/angular/angular/issues/45837', '2022-05-02T13:31:47Z','2022-05-02T15:29:26Z')
]

export default Sample;