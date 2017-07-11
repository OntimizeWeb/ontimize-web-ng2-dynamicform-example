/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'main': 'main.js',
    '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
    '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'vendor/@angular/http/bundles/http.umd.js',
    '@angular/router': 'vendor/@angular/router/bundles/router.umd.js',
    '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',
    '@angular/material': 'vendor/@angular/material/bundles/material.umd.js',
    'ng2-dnd': 'vendor/ng2-dnd/bundles/index.umd.js'
};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // App specific barrels.
    'app',
    'app/shared',
    'app/+login',
    'app/+main/+dynamicforms',
    'app/+main/+data',
    'app/+main'
];
var cliSystemConfigPackages = {};
// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index', defaultExtension: 'js' };
});
cliSystemConfigPackages['rxjs'] = { defaultExtension: 'js' };
cliSystemConfigPackages['moment'] = { main: 'moment' };
cliSystemConfigPackages['jquery'] = { main: 'dist/jquery.min' };
cliSystemConfigPackages['jquery-ui'] = { main: 'ui/widgets/datepicker' };
cliSystemConfigPackages['lodash'] = { main: 'lodash' };
cliSystemConfigPackages['datatables.net'] = { main: 'js/jquery.dataTables' };
cliSystemConfigPackages['datatables.net-buttons'] = { main: 'js/dataTables.buttons' };
cliSystemConfigPackages['datatables.net-colreorder'] = { main: 'js/dataTables.colReorder' };
cliSystemConfigPackages['datatables.net-select'] = { main: 'js/dataTables.select' };
cliSystemConfigPackages['colresizable'] = { main: 'colResizable-1.6.min' };
cliSystemConfigPackages['pdfmake'] = { main: 'build/pdfmake.min' };
cliSystemConfigPackages['ng2-translate'] = {
    main: 'bundles/ng2-translate.umd.js', defaultExtension: 'js'
};
cliSystemConfigPackages['ontimize-web-ng2'] = { main: 'ontimize' };
cliSystemConfigPackages['ontimize-web-ng2-dynamicform'] = { main: 'index', defaultExtension: 'js' };
cliSystemConfigPackages['ontimize-web-ng2-dynamicform-builder'] = {
    main: 'index', defaultExtension: 'js'
};
// cliSystemConfigPackages['angular2-highlight-js'] =
//   { main: 'highlight-js.module', defaultExtension: 'js' };
cliSystemConfigPackages['ng2-dnd'] = { defaultExtension: 'js' };
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        'rxjs': 'vendor/rxjs',
        'moment': 'vendor/moment',
        'jquery': 'vendor/jquery',
        'jquery-ui': 'vendor/jquery-ui',
        'lodash': 'vendor/lodash',
        'datatables.net': 'vendor/datatables.net',
        'datatables.net-buttons': 'vendor/datatables.net-buttons',
        'datatables.net-colreorder': 'vendor/datatables.net-colreorder',
        'datatables.net-select': 'vendor/datatables.net-select',
        'colresizable': 'vendor/colresizable',
        'pdfmake': 'vendor/pdfmake',
        'ng2-translate': 'vendor/ng2-translate',
        'ontimize-web-ng2': 'vendor/ontimize-web-ng2',
        'ontimize-web-ng2-dynamicform': 'vendor/ontimize-web-ng2-dynamicform',
        'ontimize-web-ng2-dynamicform-builder': 'vendor/ontimize-web-ng2-dynamicform-builder',
        // 'angular2-highlight-js': 'vendor/angular2-highlight-js/lib',
        'ng2-dnd': 'node_modules/ng2-dnd/bundles/index.umd.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0ZW0tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztnR0FFZ0c7QUFDaEcsa0NBQWtDO0FBQ2xDLElBQU0sR0FBRyxHQUFRO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFFakIsZUFBZSxFQUFFLDBDQUEwQztJQUMzRCxpQkFBaUIsRUFBRSw4Q0FBOEM7SUFDakUsbUJBQW1CLEVBQUUsa0RBQWtEO0lBQ3ZFLDJCQUEyQixFQUFFLGtFQUFrRTtJQUMvRixtQ0FBbUMsRUFBRSxrRkFBa0Y7SUFDdkgsZUFBZSxFQUFFLDBDQUEwQztJQUMzRCxpQkFBaUIsRUFBRSw4Q0FBOEM7SUFDakUsZ0JBQWdCLEVBQUUsNENBQTRDO0lBRTlELG1CQUFtQixFQUFFLGtEQUFrRDtJQUN2RSxTQUFTLEVBQUUscUNBQXFDO0NBSWpELENBQUM7QUFFRixtQ0FBbUM7QUFDbkMsSUFBTSxRQUFRLEdBQVEsRUFDckIsQ0FBQztBQUVGLGdHQUFnRztBQUNoRzs7Z0dBRWdHO0FBQ2hHLElBQU0sT0FBTyxHQUFhO0lBQ3hCLHdCQUF3QjtJQUN4QixLQUFLO0lBQ0wsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7Q0FFWixDQUFDO0FBRUYsSUFBTSx1QkFBdUIsR0FBUSxFQUNwQyxDQUFDO0FBRUYsdUhBQXVIO0FBQ3ZILE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFrQjtJQUNqQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDbEYsQ0FBQyxDQUFDLENBQUM7QUFHSCx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDO0FBQzdELHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3ZELHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUM7QUFDaEUsdUJBQXVCLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQztBQUN6RSx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUN2RCx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLENBQUM7QUFDN0UsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxDQUFDO0FBQ3RGLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQztBQUM1Rix1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLENBQUM7QUFDcEYsdUJBQXVCLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQztBQUMzRSx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxDQUFDO0FBQ25FLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxHQUFHO0lBQ3pDLElBQUksRUFBRSw4QkFBOEIsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJO0NBQzdELENBQUM7QUFDRix1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQ25FLHVCQUF1QixDQUFDLDhCQUE4QixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3BHLHVCQUF1QixDQUFDLHNDQUFzQyxDQUFDLEdBQUc7SUFDaEUsSUFBSSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJO0NBQ3RDLENBQUM7QUFDRixxREFBcUQ7QUFDckQsNkRBQTZEO0FBQzdELHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFLaEUsd0NBQXdDO0FBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDWixHQUFHLEVBQUU7UUFDSCxNQUFNLEVBQUUsYUFBYTtRQUNyQixRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsa0JBQWtCO1FBQy9CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLGdCQUFnQixFQUFFLHVCQUF1QjtRQUN6Qyx3QkFBd0IsRUFBRSwrQkFBK0I7UUFDekQsMkJBQTJCLEVBQUUsa0NBQWtDO1FBQy9ELHVCQUF1QixFQUFFLDhCQUE4QjtRQUN2RCxjQUFjLEVBQUUscUJBQXFCO1FBQ3JDLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsZUFBZSxFQUFFLHNCQUFzQjtRQUN2QyxrQkFBa0IsRUFBRSx5QkFBeUI7UUFDN0MsOEJBQThCLEVBQUUscUNBQXFDO1FBQ3JFLHNDQUFzQyxFQUFFLDZDQUE2QztRQUNyRiwrREFBK0Q7UUFDL0QsU0FBUyxFQUFFLDJDQUEyQztLQUN2RDtJQUNELFFBQVEsRUFBRSx1QkFBdUI7Q0FDbEMsQ0FBQyxDQUFDO0FBRUgsa0NBQWtDO0FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFBLEdBQUcsRUFBRSxVQUFBLFFBQVEsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogVXNlciBDb25maWd1cmF0aW9uLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyoqIE1hcCByZWxhdGl2ZSBwYXRocyB0byBVUkxzLiAqL1xyXG5jb25zdCBtYXA6IGFueSA9IHtcclxuICAnbWFpbic6ICdtYWluLmpzJyxcclxuXHJcbiAgJ0Bhbmd1bGFyL2NvcmUnOiAndmVuZG9yL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcycsXHJcbiAgJ0Bhbmd1bGFyL2NvbW1vbic6ICd2ZW5kb3IvQGFuZ3VsYXIvY29tbW9uL2J1bmRsZXMvY29tbW9uLnVtZC5qcycsXHJcbiAgJ0Bhbmd1bGFyL2NvbXBpbGVyJzogJ3ZlbmRvci9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcycsXHJcbiAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInOiAndmVuZG9yL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcycsXHJcbiAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc6ICd2ZW5kb3IvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLnVtZC5qcycsXHJcbiAgJ0Bhbmd1bGFyL2h0dHAnOiAndmVuZG9yL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcycsXHJcbiAgJ0Bhbmd1bGFyL3JvdXRlcic6ICd2ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcycsXHJcbiAgJ0Bhbmd1bGFyL2Zvcm1zJzogJ3ZlbmRvci9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcycsXHJcblxyXG4gICdAYW5ndWxhci9tYXRlcmlhbCc6ICd2ZW5kb3IvQGFuZ3VsYXIvbWF0ZXJpYWwvYnVuZGxlcy9tYXRlcmlhbC51bWQuanMnLFxyXG4gICduZzItZG5kJzogJ3ZlbmRvci9uZzItZG5kL2J1bmRsZXMvaW5kZXgudW1kLmpzJ1xyXG5cclxuICAvLyAnbmcyLWZvcm1pbyc6ICd2ZW5kb3IvbmcyLWZvcm1pby9pbmRleC5qcydcclxuXHJcbn07XHJcblxyXG4vKiogVXNlciBwYWNrYWdlcyBjb25maWd1cmF0aW9uLiAqL1xyXG5jb25zdCBwYWNrYWdlczogYW55ID0ge1xyXG59O1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBFdmVyeXRoaW5nIHVuZGVybmVhdGggdGhpcyBsaW5lIGlzIG1hbmFnZWQgYnkgdGhlIENMSS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IGJhcnJlbHM6IHN0cmluZ1tdID0gW1xyXG4gIC8vIEFwcCBzcGVjaWZpYyBiYXJyZWxzLlxyXG4gICdhcHAnLFxyXG4gICdhcHAvc2hhcmVkJyxcclxuICAnYXBwLytsb2dpbicsXHJcbiAgJ2FwcC8rbWFpbi8rZHluYW1pY2Zvcm1zJyxcclxuICAnYXBwLyttYWluLytkYXRhJyxcclxuICAnYXBwLyttYWluJ1xyXG4gIC8qKiBAY2xpLWJhcnJlbCAqL1xyXG5dO1xyXG5cclxuY29uc3QgY2xpU3lzdGVtQ29uZmlnUGFja2FnZXM6IGFueSA9IHtcclxufTtcclxuXHJcbi8vIGFkZCBwYWNrYWdlIGVudHJpZXMgZm9yIGFuZ3VsYXIgcGFja2FnZXMgaW4gdGhlIGZvcm0gJ0Bhbmd1bGFyL2NvbW1vbic6IHsgbWFpbjogJ2luZGV4LmpzJywgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJyB9XHJcbmJhcnJlbHMuZm9yRWFjaCgoYmFycmVsTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbYmFycmVsTmFtZV0gPSB7IG1haW46ICdpbmRleCcsIGRlZmF1bHRFeHRlbnNpb246ICdqcycgfTtcclxufSk7XHJcblxyXG5cclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ3J4anMnXSA9IHsgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJyB9O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1snbW9tZW50J10gPSB7IG1haW46ICdtb21lbnQnIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydqcXVlcnknXSA9IHsgbWFpbjogJ2Rpc3QvanF1ZXJ5Lm1pbicgfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ2pxdWVyeS11aSddID0geyBtYWluOiAndWkvd2lkZ2V0cy9kYXRlcGlja2VyJyB9O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1snbG9kYXNoJ10gPSB7IG1haW46ICdsb2Rhc2gnIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydkYXRhdGFibGVzLm5ldCddID0geyBtYWluOiAnanMvanF1ZXJ5LmRhdGFUYWJsZXMnIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydkYXRhdGFibGVzLm5ldC1idXR0b25zJ10gPSB7IG1haW46ICdqcy9kYXRhVGFibGVzLmJ1dHRvbnMnIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydkYXRhdGFibGVzLm5ldC1jb2xyZW9yZGVyJ10gPSB7IG1haW46ICdqcy9kYXRhVGFibGVzLmNvbFJlb3JkZXInIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydkYXRhdGFibGVzLm5ldC1zZWxlY3QnXSA9IHsgbWFpbjogJ2pzL2RhdGFUYWJsZXMuc2VsZWN0JyB9O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1snY29scmVzaXphYmxlJ10gPSB7IG1haW46ICdjb2xSZXNpemFibGUtMS42Lm1pbicgfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ3BkZm1ha2UnXSA9IHsgbWFpbjogJ2J1aWxkL3BkZm1ha2UubWluJyB9O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1snbmcyLXRyYW5zbGF0ZSddID0ge1xyXG4gIG1haW46ICdidW5kbGVzL25nMi10cmFuc2xhdGUudW1kLmpzJywgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xyXG59O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1snb250aW1pemUtd2ViLW5nMiddID0geyBtYWluOiAnb250aW1pemUnIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydvbnRpbWl6ZS13ZWItbmcyLWR5bmFtaWNmb3JtJ10gPSB7IG1haW46ICdpbmRleCcsIGRlZmF1bHRFeHRlbnNpb246ICdqcycgfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ29udGltaXplLXdlYi1uZzItZHluYW1pY2Zvcm0tYnVpbGRlciddID0ge1xyXG4gIG1haW46ICdpbmRleCcsIGRlZmF1bHRFeHRlbnNpb246ICdqcydcclxufTtcclxuLy8gY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ2FuZ3VsYXIyLWhpZ2hsaWdodC1qcyddID1cclxuLy8gICB7IG1haW46ICdoaWdobGlnaHQtanMubW9kdWxlJywgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJyB9O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1snbmcyLWRuZCddID0geyBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnIH07XHJcblxyXG4vKiogVHlwZSBkZWNsYXJhdGlvbiBmb3IgYW1iaWVudCBTeXN0ZW0uICovXHJcbmRlY2xhcmUgdmFyIFN5c3RlbTogYW55O1xyXG5cclxuLy8gQXBwbHkgdGhlIENMSSBTeXN0ZW1KUyBjb25maWd1cmF0aW9uLlxyXG5TeXN0ZW0uY29uZmlnKHtcclxuICBtYXA6IHtcclxuICAgICdyeGpzJzogJ3ZlbmRvci9yeGpzJyxcclxuICAgICdtb21lbnQnOiAndmVuZG9yL21vbWVudCcsXHJcbiAgICAnanF1ZXJ5JzogJ3ZlbmRvci9qcXVlcnknLFxyXG4gICAgJ2pxdWVyeS11aSc6ICd2ZW5kb3IvanF1ZXJ5LXVpJyxcclxuICAgICdsb2Rhc2gnOiAndmVuZG9yL2xvZGFzaCcsXHJcbiAgICAnZGF0YXRhYmxlcy5uZXQnOiAndmVuZG9yL2RhdGF0YWJsZXMubmV0JyxcclxuICAgICdkYXRhdGFibGVzLm5ldC1idXR0b25zJzogJ3ZlbmRvci9kYXRhdGFibGVzLm5ldC1idXR0b25zJyxcclxuICAgICdkYXRhdGFibGVzLm5ldC1jb2xyZW9yZGVyJzogJ3ZlbmRvci9kYXRhdGFibGVzLm5ldC1jb2xyZW9yZGVyJyxcclxuICAgICdkYXRhdGFibGVzLm5ldC1zZWxlY3QnOiAndmVuZG9yL2RhdGF0YWJsZXMubmV0LXNlbGVjdCcsXHJcbiAgICAnY29scmVzaXphYmxlJzogJ3ZlbmRvci9jb2xyZXNpemFibGUnLFxyXG4gICAgJ3BkZm1ha2UnOiAndmVuZG9yL3BkZm1ha2UnLFxyXG4gICAgJ25nMi10cmFuc2xhdGUnOiAndmVuZG9yL25nMi10cmFuc2xhdGUnLFxyXG4gICAgJ29udGltaXplLXdlYi1uZzInOiAndmVuZG9yL29udGltaXplLXdlYi1uZzInLFxyXG4gICAgJ29udGltaXplLXdlYi1uZzItZHluYW1pY2Zvcm0nOiAndmVuZG9yL29udGltaXplLXdlYi1uZzItZHluYW1pY2Zvcm0nLFxyXG4gICAgJ29udGltaXplLXdlYi1uZzItZHluYW1pY2Zvcm0tYnVpbGRlcic6ICd2ZW5kb3Ivb250aW1pemUtd2ViLW5nMi1keW5hbWljZm9ybS1idWlsZGVyJyxcclxuICAgIC8vICdhbmd1bGFyMi1oaWdobGlnaHQtanMnOiAndmVuZG9yL2FuZ3VsYXIyLWhpZ2hsaWdodC1qcy9saWInLFxyXG4gICAgJ25nMi1kbmQnOiAnbm9kZV9tb2R1bGVzL25nMi1kbmQvYnVuZGxlcy9pbmRleC51bWQuanMnXHJcbiAgfSxcclxuICBwYWNrYWdlczogY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNcclxufSk7XHJcblxyXG4vLyBBcHBseSB0aGUgdXNlcidzIGNvbmZpZ3VyYXRpb24uXHJcblN5c3RlbS5jb25maWcoeyBtYXAsIHBhY2thZ2VzIH0pO1xyXG4iXX0=