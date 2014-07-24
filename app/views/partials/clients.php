<p>happyclients</p>
<form data-ng-submit="upload(image)"> <!--ng-upload="uploadComplete(content)"  -->
  {{image}}
  <p>
    <label for="fullname">Fullname:</label>
    <input id="fullname" type="text" name="fullname" ng-model="image.fullname" />
  </p>
  <p>
    <label for="file">Your picture:</label>
    <input id="file" type="file" name="file" ng-model="image.file" onchange="angular.element(this).scope().setFiles(this)"/>
  </p>
  <p>
    <input type="submit" class="btn" value="Submit" ng-disabled="$isLoading"  />
  </p>
</form>

<div ng-file-drop="onFileSelect($files)" ng-file-drag-over-class="optional-css-class" ng-show="dropSupported">drop files here</div>
<div ng-show="files.length">
  <div ng-repeat="file in files.slice(0)">
      <span>{{file.webkitRelativePath || file.name}}</span>
      (<span ng-switch="file.size > 1024*1024">
        <span ng-switch-when="true">{{file.size / 1024 / 1024 | number:2}} MB</span>
        <span ng-switch-default>{{file.size / 1024 | number:2}} kB</span>
      </span>)
  </div>
  <input type="button" ng-click="uploadFile()" value="Upload" />
  <!-- <div ng-show="progressVisible">
    <div class="percent">{{progress}}%</div>
    <div class="progress-bar">
      <div class="uploaded" ng-style="{'width': progress+'%'}"></div>
    </div>
  </div> -->
</div>