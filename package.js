Package.describe({
  name: 'chipcastledotcom:meteor-jspdf',
  version: '0.0.8',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for wrapping jsPDF',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ChipCastleDotCom/meteor-jspdf-original.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.use('chipcastledotcom:jspdf@0.0.2', 'client');
});
