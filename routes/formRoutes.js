const express = require('express');
const router = express.Router();
const HotelForm = require('../models/HotelForm');

// Page d'accueil
router.get('/', (req, res) => {
  res.render('home', { title: 'Accueil' });
});

// Afficher le formulaire
router.get('/form', (req, res) => {
  res.render('form', { title: 'Formulaire' });
});

// Soumettre le formulaire
router.post('/form', async (req, res) => {
  try {
    const formData = new HotelForm(req.body);
    await formData.save();
    res.render('success', { 
      title: 'Formulaire Soumis',
      message: 'Merci! Votre formulaire a été soumis avec succès. Nous vous contacterons bientôt.' 
    });
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    res.render('form', { 
      title: 'Formulaire', 
      error: 'Une erreur est survenue. Veuillez réessayer.', 
      formData: req.body 
    });
  }
});

// Merci / Page de succès
router.get('/success', (req, res) => {
  res.render('success', { 
    title: 'Formulaire Soumis',
    message: 'Merci! Votre formulaire a été soumis avec succès. Nous vous contacterons bientôt.' 
  });
});

module.exports = router; 