import React from 'react';
import { LazyLog } from 'react-lazylog';

export interface TerminalProps extends React.DOMAttributes<{}> {
  options?: any;
  value?: string;
}

export default class TerminalComponent extends React.Component<TerminalProps> {
  container: HTMLDivElement;
  constructor(props?: TerminalProps, context?: any) {
    super(props, context);
  }

  render() {
    return <div className="terminal">
      <LazyLog
        selectableLines={true}
        caseInsensitive={true}
        rowHeight={20}
        lineClassName="terminal-line"
        follow={true}
        text={this.props.value || "No build logs..."} />
    </div>
  }
}
export { TerminalComponent };