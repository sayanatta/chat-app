import { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <main className='min-h-screen flex flex-col'>{children}</main>;
};
export default PageContainer;
