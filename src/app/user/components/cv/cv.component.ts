import { Component, OnInit } from '@angular/core';
import { CVService } from './cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  myFile: any;
  fileInput: any;
  userID: any;
  constructor(private cvservice: CVService) {}
  ngOnInit(): void {
    // a passer avec le fichier pour nommer le dossier de stockage
    this.userID = localStorage.getItem('idUser');
  }
  fileChange(element: any) {
    console.log(element);
    this.myFile = element.target.files[0];
    this.fileInput = this.myFile.name;
    console.log(this.myFile);
  }

  addcv(value: any): void {
    let dafile = new FormData();
    dafile.append('file', this.myFile);
    console.log('DAFILE//', dafile);
    this.cvservice.addCv(dafile, this.userID).subscribe({
      next: (data: any) => {
        console.log('DATA:::', data);
        console.log('FILEINPut//:', this.fileInput);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
// import { Component } from '@angular/core';
// import { HttpResponse, HttpEventType } from '@angular/common/http';
// import { UploadFileService } from './file.service';

// @Component({
//   selector: 'app-cv',
//   templateUrl: './cv.component.html',
//   styleUrls: ['./cv.component.css'],
// })
// export class CvComponent {
//   title = 'File-Upload-Save';
//   selectedFiles: any;
//   currentFileUpload: any;
//   progress: { percentage: number } = { percentage: 0 };
//   selectedFile: any;
//   changeImage = false;
//   constructor(private uploadService: UploadFileService) {}
//   // downloadFile() {
//   //   const link = document.createElement('a');
//   //   link.setAttribute('target', '_blank');
//   //   link.setAttribute('href', '_File_Saved_Path');
//   //   link.setAttribute('download', 'file_name.pdf');
//   //   document.body.appendChild(link);
//   //   link.click();
//   //   link.remove();
//   // }
//   change($event: any) {
//     this.changeImage = true;
//   }
//   changedImage(event: any) {
//     this.selectedFile = event.target.files[0];
//   }
//   upload() {
//     this.progress.percentage = 0;
//     this.currentFileUpload = this.selectedFiles.item(0);
//     this.uploadService
//       .pushFileToStorage(this.currentFileUpload)
//       .subscribe((event) => {
//         if (event.type === HttpEventType.UploadProgress) {
//           this.progress.percentage = Math.round((100 * event.loaded) / 100);
//         } else if (event instanceof HttpResponse) {
//           alert('File Successfully Uploaded');
//         }
//         this.selectedFiles = undefined;
//       });
//   }
//   selectFile(event: any) {
//     this.selectedFiles = event.target.files;
//   }
