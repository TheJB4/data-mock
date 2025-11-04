import { Injectable } from '@nestjs/common';

export const recibosData = [
  {
    id: '1',
    state: 'urgente',
    title: 'recibo de emergencia',
    fechaEmision: '2024/06/15',
    montoTotal: 84.5,
  },
  {
    id: '2',
    state: 'pendiente',
    title: 'recibo de condominio',
    fechaEmision: '2024/06/20',
    montoTotal: 84.5,
  },
  {
    id: '3',
    state: 'rango de vencimiento',
    title: 'recibo de emergencia',
    fechaEmision: '2024/06/10',
    montoTotal: 125.75,
  },
  {
    id: '4',
    title: 'recibo de condominio',
    fechaEmision: '2024/06/25',
    montoTotal: 95.0,
  },
  {
    id: '5',
    state: 'pendiente',
    title: 'recibo de condominio',
    fechaEmision: '2024/06/18',
    montoTotal: 110.25,
  },
  {
    id: '6',
    state: 'urgente',
    title: 'recibo de emergencia',
    fechaEmision: '2024/06/12',
    montoTotal: 200.0,
  },
  {
    id: '7',
    title: 'recibo de condominio',
    fechaEmision: '2024/06/22',
    montoTotal: 84.5,
  },
  {
    id: '8',
    state: 'rango de vencimiento',
    title: 'recibo de emergencia',
    fechaEmision: '2024/06/08',
    montoTotal: 150.5,
  },
];

@Injectable()
export class RecibosService {
  getRecibos(filter?: string) {
    if (!filter || filter === 'todos') {
      return recibosData;
    }

    if (filter === 'condominio') {
      return recibosData.filter(
        (recibo) => recibo.title === 'recibo de condominio',
      );
    }

    if (filter === 'emergencia') {
      return recibosData.filter(
        (recibo) => recibo.title === 'recibo de emergencia',
      );
    }

    return recibosData;
  }
}

