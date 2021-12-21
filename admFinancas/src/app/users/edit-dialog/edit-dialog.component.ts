import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Users} from '../../../../../../common/users';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html'
})
export class EditDialogComponent {
  not = null;
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users,
  ) {}
}
