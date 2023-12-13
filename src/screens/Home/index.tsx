import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import axios from 'axios';

import {FlatList} from './styles';
import {Workshop} from '../../components/Workshop';

type Officina = {
  Id: number;
  Nome: string;
  Descricao: string;
  DescricaoCurta: string;
  Endereco: string;
  Latitude: string;
  Longitude: string;
  Foto: string;
  AvaliacaoUsuario: number;
  CodigoAssociacao: number;
  Email: string;
  Telefone1: string;
  Telefone2: string;
  Ativo: boolean;
};

type OficinaAxiosRequest = {
  data: {
    ListaOficinas: Officina[];
    RetornoErro: {
      retornoErro: string;
    };
    Token: string;
  };
};

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [workshops, setWorkshops] = useState<Officina[]>([]);

  const getWorkshops = async () => {
    const {data}: OficinaAxiosRequest = await axios.get(
      '/api/Oficina?codigoAssociacao=601&cpfAssociado=""',
    );

    if (data && data.ListaOficinas) {
      setWorkshops(data.ListaOficinas);
    } else {
      setWorkshops([]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getWorkshops();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={workshops}
      renderItem={({item}) => <Workshop workshop={item} />}
    />
  );
}
