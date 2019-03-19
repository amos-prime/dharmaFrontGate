import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTreeModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule ({
    imports: [
        MatButtonModule, MatIconModule, MatTreeModule, MatFormFieldModule, MatInputModule
        ],
    exports: [
        MatButtonModule, MatIconModule, MatTreeModule, MatFormFieldModule, MatInputModule
    ]
})
export class MaterialModule { }
