import React, { Component, ReactNode } from 'react';
import { AccessKey, Permission, Permissions } from '@Models/index';

import { Icon } from '@Components/Icon';

interface IWorkspaceRowProps {
   AccessKey: AccessKey;
   onSelect?: {(ak:AccessKey): void;}
   isActive: boolean;
}

export const WorkspaceRow = (props: IWorkspaceRowProps) => (
   <div className={["lk-workspace-row", props.isActive ? "lk-workspace-row--active" : ""].join(' ')} onClick={() => props.onSelect(props.AccessKey) }>
      {
         !Permission.canEdit(props.AccessKey.Permissions) ? " X - " : null
      }
      
      {
         props.AccessKey.Workspace.Name
      }
      <div><small> { props.AccessKey.getCreateDate().toDateString() }</small></div>
      <div className="lk-workspace-row--underline"></div>
   </div>
);