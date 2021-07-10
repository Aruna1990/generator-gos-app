const Generator = require('yeoman-generator');

module.exports = class extends Generator{
  constructor(args, opts) {
    super(args, opts);
  }
  prompting () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: '你的项目名称',
      default: this.appname,
    }, {
      type: 'input',
      name: 'pageTitle',
      message: '你的页面Title',
      default: this.appname,
    }, {
      type: 'input',
      name: 'devPort',
      message: 'web容器服务端口',
      default: 8003,
    }, {
      type: 'input',
      name: 'proxyPort',
      message: '代理服务端口',
      default: 9097,
    }, {
      type: 'input',
      name: 'imageName',
      message: '镜像名称',
      default: this.appname,
    }]).then((answers) => {
      this.log('项目名称', answers.name);
      this.log('是否使用TypeScript?', answers.useTypeScript ? '是' : '否');
      this.answers = answers;
    })
  }
  writing () {
    this.log(this.answers.name, 'writing files');
    const content = this.answers;

    const tmpl = this.templatePath('**');
    const dotfile = this.templatePath('.*');
    const output = this.destinationPath('');
    this.fs.copyTpl([tmpl, dotfile], output, content);
  }
}