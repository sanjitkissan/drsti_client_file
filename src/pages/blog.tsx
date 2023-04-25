import React from 'react';
import Breadcrumb from '../components/drstinewblog/Breadcrumb';
import Newblogs from '../components/drstinewblog/Newblogs';
import MainForm from '../components/form/MainForm';
import MainLayout from '../layouts/MainLayout';

function Blog() {
    return (
        <MainLayout>
            <MainForm/>
            <Breadcrumb/>
          <Newblogs/>
            
        </MainLayout>
    );
}

export default Blog;