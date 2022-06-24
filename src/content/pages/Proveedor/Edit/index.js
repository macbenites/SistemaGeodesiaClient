import {
    Container,
    Grid,
    Card,
    CardHeader,
    Divider,
    CardContent,
    Box,
    Button
  } from '@mui/material';
  import {
    fetchArticles,
    fetchArticlesCreate,
    updateArticle
  } from 'src/redux/slices/articles/articleSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
  import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useFormik } from 'formik';
  import { validationProvider } from 'src/utils/validation';
  
  const EditProvider = ({ setModal }) => {
  };

export default EditProvider;