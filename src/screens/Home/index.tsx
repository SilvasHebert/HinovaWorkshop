import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useGet} from '../../hooks/useGet';
import {FullLoading} from '../../components/FullLoading';
import {AppNavigation} from '../../routes/app.routes';
import {FlatList} from './styles';
import {WorkshopItem} from '../../components/WorkshopsList/WorkshopItem';
import {ListRenderItemInfo} from 'react-native';

export type Workshop = {
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

type WorkshopAxiosRequest = {
  ListaOficinas: Workshop[];
  RetornoErro: {
    retornoErro: string;
  };
  Token: string;
};

export type HomeParams = NativeStackScreenProps<AppNavigation, 'Home'>;

export function Home({navigation}: HomeParams) {
  const {data: workshopRequest, isFetching} = useGet<WorkshopAxiosRequest>(
    '/api/Oficina?codigoAssociacao=601&cpfAssociado=""',
  );

  if (isFetching) {
    return <FullLoading />;
  }

  return (
    <FlatList
      data={workshopRequest?.ListaOficinas}
      renderItem={(itemData: ListRenderItemInfo<Workshop>) => (
        <WorkshopItem
          workshop={itemData.item}
          onPress={() => navigation.navigate('WorkshopDetails', itemData.item)}
        />
      )}
    />
  );
}
