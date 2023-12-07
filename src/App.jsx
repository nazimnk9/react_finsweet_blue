import { useState } from 'react'
import Navbar from './sections/navbar/Navbar'
import LogoImg from "./assets/images/logo.png"
import Banner from './sections/banner/Banner'
import BannerShapeImg from "./assets/images/banner_shape.png"
import Work from './sections/work/Work'
import WorkIconIng from "./assets/images/work__icon.png"
import Project from './sections/project/Project'
import ProjectImageOne from "./assets/images/project_img_1.jpg"
import ProjectImageTwo from "./assets/images/project_imag-2.jpg"
import ProjectImageThree from "./assets/images/project_img_3.jpg"
import Features from './sections/features/Features'
import Client from './sections/client/Client'
import ClientAvaterImage from "./assets/images/client_avater.png"
import Questions from './sections/questions/Questions'
import Inquiry from './sections/inquiry/Inquiry'
import InquiryImg from "./assets/images/inquiry_img.jpg"
import Blog from './sections/blog/Blog'
import BlogImg from "./assets/images/blog__img.png"
import Footer from './sections/footer/Footer'
import FooterNav from './sections/footernav/FooterNav'
import Home from './components/Home'
import Contact from './components/Contact'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from './components/MainLayout'
import Error from './components/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='/' element={<Banner banner_shape={BannerShapeImg} />} />
        <Route path='/blog' element={<Blog blog_image={BlogImg} />} />
        <Route path='/client' element={<Client client_avater_img={ClientAvaterImage} />} />
        <Route path='/features' element={<Features />} />
        <Route path='/inquiry' element={<Inquiry inquire_image={InquiryImg} />} />
        <Route path='/project' element={<Project small_item_img_1={ProjectImageOne} small_item_img_2={ProjectImageTwo} small_item_img_3={ProjectImageThree} />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/work' element={<Work work_icon={WorkIconIng} />} />
      </Route>
      <Route path='*' element={<Error />} />
    </>
  )
);

function App() {

  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App

{/* <>
      <Navbar logo_img={LogoImg} />
      <Banner banner_shape={BannerShapeImg} />
      <Work work_icon={WorkIconIng} />
      <Project small_item_img_1={ProjectImageOne} small_item_img_2={ProjectImageTwo} small_item_img_3={ProjectImageThree} />
      <Features />
      <Client client_avater_img={ClientAvaterImage} />
      <Questions />
      <Inquiry inquire_image={InquiryImg} />
      <Blog blog_image={BlogImg} />
      <Footer logo_img={LogoImg} />
      <FooterNav />
    </>
 */}